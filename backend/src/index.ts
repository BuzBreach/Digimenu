import express from 'express';
import http from 'http';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import QRCode from 'qrcode';
import { prisma } from './db';
import { getRecommendationsForCustomer, getBestSellers } from './recommend';
import { OrderStatus, RecommendationSource } from './generated/prisma-paid';

dotenv.config();

const app = express();
const server = http.createServer(app);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const localOriginPattern = /^https?:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3})(:\d+)?$/;
const tunnelOriginPattern = /^https?:\/\/([a-z0-9-]+\.)?(ngrok\.io|ngrok-free\.app)(:\d+)?$/i;
const validateCorsOrigin = (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
  if (!origin || allowedOrigins.includes(origin) || localOriginPattern.test(origin) || tunnelOriginPattern.test(origin)) {
    return callback(null, true);
  }
  return callback(new Error('CORS origin is not allowed.'));
};
const corsOptions: cors.CorsOptions = {
  origin: validateCorsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Configure Socket.IO with CORS support
const io = new Server(server, {
  cors: {
    origin: validateCorsOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

app.disable('x-powered-by');
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'same-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});
app.use(cors(corsOptions));
app.use(express.json({
  limit: '10mb',
  verify: (req: any, _res, buf) => {
    req.rawBody = buf.toString('utf8');
  },
}));

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'niva_secret_token_12345';
const isWeakJwtSecret = !process.env.JWT_SECRET || JWT_SECRET.includes('niva_secret_token_12345');
const CAFE_NAME = process.env.CAFE_NAME || 'Niva Cafe';
const CAFE_LEGAL_NAME = process.env.CAFE_LEGAL_NAME || 'Niva Cafe, Bar & Kitchen';
const DEFAULT_CAFE_SETTINGS = {
  cafeName: CAFE_NAME,
  cafeLegalName: CAFE_LEGAL_NAME,
  gstLabel: 'GST 5%',
  gstRate: 0.05,
  upiId: 'niva.cafe@upi',
  taxNumber: '',
  address: '',
  phone: '',
  printerName: '',
  billFooter: 'Thank you for dining with us.',
  tableCount: 20,
  backupFolder: path.resolve(process.cwd(), 'backups'),
};
const CUSTOMER_OTP_ENABLED = process.env.CUSTOMER_OTP_ENABLED === 'true';
const CUSTOMER_CANCEL_WINDOW_MINUTES = 5;
const MAX_ORDER_ITEMS = 60;
const MAX_ITEM_QUANTITY = 25;
const MAX_NOTE_LENGTH = 500;
const PAYMENT_GATEWAY = (process.env.PAYMENT_GATEWAY || '').toLowerCase();
const PHONEPE_ENV = (process.env.PHONEPE_ENV || 'sandbox').toLowerCase();
const PHONEPE_BASE_URL =
  process.env.PHONEPE_BASE_URL ||
  (PHONEPE_ENV === 'production'
    ? 'https://api.phonepe.com/apis'
    : 'https://api-preprod.phonepe.com/apis/pg-sandbox');
const PHONEPE_AUTH_URL = process.env.PHONEPE_AUTH_URL || `${PHONEPE_BASE_URL}/v1/oauth/token`;
const PHONEPE_CLIENT_ID = process.env.PHONEPE_CLIENT_ID || '';
const PHONEPE_CLIENT_SECRET = process.env.PHONEPE_CLIENT_SECRET || '';
const PHONEPE_CLIENT_VERSION = process.env.PHONEPE_CLIENT_VERSION || '1';
const PHONEPE_MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID || '';
const PHONEPE_WEBHOOK_USERNAME = process.env.PHONEPE_WEBHOOK_USERNAME || '';
const PHONEPE_WEBHOOK_PASSWORD = process.env.PHONEPE_WEBHOOK_PASSWORD || '';
const otpSessions = new Map<string, { otp: string; expiresAt: number; name?: string }>();
let phonePeAccessToken: { token: string; expiresAt: number } | null = null;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

const statusEventMap: Record<OrderStatus, string> = {
  PENDING: 'order:new',
  PREPARING: 'order:preparing',
  READY: 'order:ready',
  SERVED: 'order:served',
  CANCELLED: 'order:cancelled',
};

const emitOrderStatus = (order: any) => {
  io.emit('order:updated', order);
  io.emit(statusEventMap[order.status as OrderStatus] || 'order:updated', order);
};

const emitPaymentStatus = (payment: any, order?: any) => {
  io.emit('payment:updated', payment);
  if (order) emitOrderStatus(order);
};

const createRateLimit = (name: string, limit: number, windowMs: number) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const key = `${name}:${req.ip}:${req.get('user-agent') || ''}`;
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return next();
  }
  bucket.count += 1;
  if (bucket.count > limit) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment and try again.' });
  }
  return next();
};

const loginRateLimit = createRateLimit('admin-login', 8, 10 * 60 * 1000);
const orderRateLimit = createRateLimit('customer-order', 30, 60 * 1000);
const identifyRateLimit = createRateLimit('customer-identify', 30, 60 * 1000);

const getCafeSettings = async () => {
  const row = await prisma.appSetting.findUnique({ where: { key: 'cafeProfile' } });
  return { ...DEFAULT_CAFE_SETTINGS, ...((row?.value as any) || {}) };
};

const saveCafeSettings = async (settings: any) => {
  const cleanSettings = {
    cafeName: cleanText(settings.cafeName, 80) || DEFAULT_CAFE_SETTINGS.cafeName,
    cafeLegalName: cleanText(settings.cafeLegalName, 120) || DEFAULT_CAFE_SETTINGS.cafeLegalName,
    gstLabel: cleanText(settings.gstLabel, 40) || DEFAULT_CAFE_SETTINGS.gstLabel,
    gstRate: Math.min(Math.max(Number(settings.gstRate ?? DEFAULT_CAFE_SETTINGS.gstRate), 0), 0.28),
    upiId: cleanText(settings.upiId, 120) || '',
    taxNumber: cleanText(settings.taxNumber, 80) || '',
    address: cleanText(settings.address, 240) || '',
    phone: cleanText(settings.phone, 40) || '',
    printerName: cleanText(settings.printerName, 120) || '',
    billFooter: cleanText(settings.billFooter, 160) || DEFAULT_CAFE_SETTINGS.billFooter,
    tableCount: Math.min(Math.max(parseInt(String(settings.tableCount || DEFAULT_CAFE_SETTINGS.tableCount), 10), 1), 200),
    backupFolder: cleanText(settings.backupFolder, 260) || DEFAULT_CAFE_SETTINGS.backupFolder,
  };

  await prisma.appSetting.upsert({
    where: { key: 'cafeProfile' },
    update: { value: cleanSettings },
    create: { key: 'cafeProfile', value: cleanSettings },
  });
  return cleanSettings;
};

const buildBackupPayload = async () => {
  const [customers, categories, menuItems, orders, recommendations, users, feedback, inventoryTransactions, settings] = await Promise.all([
    prisma.customer.findMany({ orderBy: { createdAt: 'asc' } }),
    prisma.menuCategory.findMany({ orderBy: { sortOrder: 'asc' } }),
    prisma.menuItem.findMany({ orderBy: { name: 'asc' } }),
    prisma.order.findMany({ include: { items: true, payments: true }, orderBy: { createdAt: 'asc' } }),
    prisma.recommendation.findMany({ orderBy: { shownAt: 'asc' } }),
    prisma.adminUser.findMany({
      select: { id: true, username: true, name: true, role: true, createdAt: true, updatedAt: true },
      orderBy: { createdAt: 'asc' },
    }),
    prisma.customerFeedback.findMany({ orderBy: { createdAt: 'asc' } }),
    prisma.inventoryTransaction.findMany({ orderBy: { createdAt: 'asc' } }),
    getCafeSettings(),
  ]);

  return {
    app: 'Niva POS',
    version: 2,
    generatedAt: new Date(),
    restoreMode: 'catalog',
    settings,
    customers,
    categories,
    menuItems,
    orders,
    recommendations,
    feedback,
    inventoryTransactions,
    users,
  };
};

app.get('/api/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      ok: true,
      service: 'niva-pos-api',
      database: 'ok',
      timestamp: new Date().toISOString(),
    });
  } catch (_error) {
    res.status(503).json({
      ok: false,
      service: 'niva-pos-api',
      database: 'unavailable',
      timestamp: new Date().toISOString(),
    });
  }
});

const roundMoney = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;
const cleanText = (value: any, max = MAX_NOTE_LENGTH) =>
  typeof value === 'string' ? value.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max) : undefined;
const isUuid = (value: any) =>
  typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);

const getPublicBaseUrl = (req: express.Request) => {
  const host = req.get('host') || `localhost:${PORT}`;
  return `http://${host.replace(/:5000$/, ':3000')}`;
};

const getApiBaseUrl = (req: express.Request) => {
  const protocol = req.get('x-forwarded-proto') || req.protocol || 'http';
  const host = req.get('host') || `localhost:${PORT}`;
  return `${protocol}://${host}`;
};

const generatePseudoQrSvg = (value: string) => {
  const size = 33;
  const cell = 10;
  const margin = 4;
  let seed = 0;
  for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) >>> 0;
  const isFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);
  const finderCell = (x: number, y: number) => {
    const lx = x < 7 ? x : x >= size - 7 ? x - (size - 7) : x;
    const ly = y < 7 ? y : y >= size - 7 ? y - (size - 7) : y;
    return lx === 0 || ly === 0 || lx === 6 || ly === 6 || (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4);
  };
  const rects: string[] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let on = false;
      if (isFinder(x, y)) {
        on = finderCell(x, y);
      } else {
        const n = Math.imul(x + 17, 73856093) ^ Math.imul(y + 29, 19349663) ^ seed;
        on = (n & 7) < 3;
      }
      if (on) {
        rects.push(`<rect x="${(x + margin) * cell}" y="${(y + margin) * cell}" width="${cell}" height="${cell}"/>`);
      }
    }
  }
  const total = (size + margin * 2) * cell;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${total}" role="img"><rect width="${total}" height="${total}" fill="#f7efe3"/><g fill="#21160f">${rects.join('')}</g></svg>`;
};

const normalizeMobile = (mobile: string) => mobile.replace(/\D/g, '').slice(-10);

const sendOtpSms = async (mobile: string, otp: string) => {
  const provider = (process.env.SMS_PROVIDER || '').toLowerCase();
  const message = `Your ${CAFE_NAME} OTP is ${otp}. It is valid for 5 minutes.`;

  if (provider === 'fast2sms') {
    const apiKey = process.env.FAST2SMS_API_KEY;
    const senderId = process.env.FAST2SMS_SENDER_ID || 'NIVA';
    if (!apiKey) throw new Error('FAST2SMS_API_KEY is not configured.');

    const response = await fetch('https://www.fast2sms.com/dev/bulkV2', {
      method: 'POST',
      headers: {
        authorization: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        route: 'q',
        message,
        language: 'english',
        flash: 0,
        numbers: mobile,
        sender_id: senderId,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Fast2SMS failed: ${text}`);
    }
    return;
  }

  if (provider === 'twilio') {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_FROM_NUMBER;
    const countryCode = process.env.SMS_DEFAULT_COUNTRY_CODE || '+91';
    if (!accountSid || !authToken || !fromNumber) {
      throw new Error('Twilio SMS credentials are not configured.');
    }

    const toNumber = mobile.startsWith('+') ? mobile : `${countryCode}${mobile}`;
    const body = new URLSearchParams({
      To: toNumber,
      From: fromNumber,
      Body: message,
    });

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Twilio failed: ${text}`);
    }
    return;
  }

  throw new Error('SMS gateway is not configured. Set SMS_PROVIDER and provider credentials in backend/.env.');
};

const buildCustomerProfile = async (mobile: string, name?: string) => {
  const normalizedMobile = normalizeMobile(mobile || '');
  if (normalizedMobile.length < 8) {
    throw new Error('Valid mobile number is required.');
  }

  const customer = await prisma.customer.upsert({
    where: { mobile: normalizedMobile },
    update: name ? { name: cleanText(name, 80) } : {},
    create: {
      mobile: normalizedMobile,
      name: cleanText(name, 80) || 'Guest Customer',
      loyaltyPoints: 0,
    },
  });

  const orderHistory = await prisma.order.findMany({
    where: { customerId: customer.id },
    include: {
      items: {
        include: {
          menuItem: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  const recommendations = await getRecommendationsForCustomer(normalizedMobile);

  if (recommendations.length > 0) {
    const existingRecommendationKeys = new Set(
      (await prisma.recommendation.findMany({
        where: {
          customerId: customer.id,
          menuItemId: { in: recommendations.map((item) => item.id) },
        },
        select: { menuItemId: true, source: true },
      })).map((row) => `${row.menuItemId}:${row.source}`)
    );

    const newRecommendationRows = recommendations.map((item, index) => ({
        customerId: customer.id,
        menuItemId: item.id,
        source: orderHistory.length > 0 && index < orderHistory[0].items.length ? RecommendationSource.LAST_ORDER : RecommendationSource.RULE_BASED,
        reason: orderHistory.length > 0
          ? 'Recommended because this guest has ordered related items before.'
          : 'Recommended as a house favorite for new guests.',
      })).filter((row) => !existingRecommendationKeys.has(`${row.menuItemId}:${row.source}`));

    if (newRecommendationRows.length > 0) {
      await prisma.recommendation.createMany({ data: newRecommendationRows, skipDuplicates: true });
    }
  }

  return {
    customer,
    orderHistory,
    recommendations,
  };
};

// JWT Authentication Middleware
const authenticateAdmin = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

const getAdminFromRequest = (req: express.Request) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  try {
    return jwt.verify(authHeader.split(' ')[1], JWT_SECRET) as any;
  } catch {
    return null;
  }
};

const requireRoles = (...roles: string[]) => (req: any, res: any, next: any) => {
  if (req.user?.role === 'ADMIN' || roles.includes(req.user?.role)) {
    return next();
  }
  return res.status(403).json({ error: 'This staff account is not allowed to perform this action.' });
};

const validStaffRoles = ['ADMIN', 'MANAGER', 'KITCHEN', 'BAR', 'BILLING', 'STAFF'];

const getDayRange = (dateString?: string) => {
  const base = dateString ? new Date(`${dateString}T00:00:00`) : new Date();
  const start = new Date(base);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
};

const parseNullableInt = (value: any) => {
  if (value === null || value === undefined || value === '') return null;
  const parsed = parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : null;
};

const formatDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getDateSeries = (fromDate?: string, toDate?: string) => {
  const fallbackEnd = new Date();
  const fallbackStart = new Date();
  fallbackStart.setDate(fallbackStart.getDate() - 29);

  const start = fromDate ? new Date(`${fromDate}T00:00:00`) : fallbackStart;
  const end = toDate ? new Date(`${toDate}T00:00:00`) : fallbackEnd;
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const dates: string[] = [];
  const cursor = new Date(start);
  while (cursor <= end && dates.length <= 370) {
    dates.push(formatDateKey(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  const exclusiveEnd = new Date(end);
  exclusiveEnd.setDate(exclusiveEnd.getDate() + 1);

  return { start, end: exclusiveEnd, dates };
};

const csvCell = (value: any) => {
  const text = String(value ?? '');
  if (/[",\r\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
};

const getOrderNumberPrefix = (date: Date) => {
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `#${year}${month}${day}-`;
};

const isPhonePeConfigured = () =>
  PAYMENT_GATEWAY === 'phonepe' &&
  Boolean(PHONEPE_CLIENT_ID && PHONEPE_CLIENT_SECRET && PHONEPE_MERCHANT_ID);

const phonePeRequest = async (path: string, options: RequestInit = {}) => {
  if (!isPhonePeConfigured()) {
    throw new Error('PhonePe is not configured. Add PhonePe credentials in backend/.env.');
  }

  const now = Date.now();
  if (!phonePeAccessToken || phonePeAccessToken.expiresAt <= now + 60_000) {
    const authBody = new URLSearchParams({
      client_id: PHONEPE_CLIENT_ID,
      client_version: PHONEPE_CLIENT_VERSION,
      client_secret: PHONEPE_CLIENT_SECRET,
      grant_type: 'client_credentials',
    });

    const authResponse = await fetch(PHONEPE_AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: authBody,
    });
    const authText = await authResponse.text();
    const authData = authText ? JSON.parse(authText) : {};
    if (!authResponse.ok || !authData.access_token) {
      throw new Error(authData.message || authData.error_description || 'PhonePe authentication failed.');
    }

    const expiresIn = Number(authData.expires_in || authData.expiresIn || 900);
    phonePeAccessToken = {
      token: authData.access_token,
      expiresAt: now + Math.max(expiresIn - 30, 60) * 1000,
    };
  }

  const response = await fetch(`${PHONEPE_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `O-Bearer ${phonePeAccessToken.token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(data.message || data.error_description || data.error || 'PhonePe request failed.');
  }
  return data;
};

const getPhonePePaymentState = (payload: any) => {
  const state = String(payload?.state || payload?.data?.state || payload?.code || '').toUpperCase();
  if (['COMPLETED', 'PAYMENT_SUCCESS', 'SUCCESS', 'PAID'].includes(state)) return 'PAID';
  if (['FAILED', 'PAYMENT_ERROR', 'PAYMENT_DECLINED'].includes(state)) return 'FAILED';
  if (['CANCELLED', 'PAYMENT_CANCELLED'].includes(state)) return 'CANCELLED';
  return 'PENDING';
};

const extractPhonePePaymentId = (payload: any) =>
  payload?.paymentDetails?.[0]?.transactionId ||
  payload?.data?.paymentDetails?.[0]?.transactionId ||
  payload?.transactionId ||
  payload?.data?.transactionId ||
  null;

const markOrderPaid = async (orderId: string, paymentMethod: string, gatewayFields: Record<string, any> = {}) => {
  const paidOrder = await prisma.order.update({
    where: { id: orderId },
    data: {
      isPaid: true,
      paidAt: new Date(),
      paymentMethod,
      paymentStatus: 'PAID',
      cancelUntil: new Date(Date.now() + CUSTOMER_CANCEL_WINDOW_MINUTES * 60 * 1000),
      ...gatewayFields,
    },
    include: { customer: true, items: { include: { menuItem: true } } },
  });
  emitOrderStatus(paidOrder);
  return paidOrder;
};

const verifyPhonePeWebhook = (req: express.Request) => {
  if (PHONEPE_WEBHOOK_USERNAME && PHONEPE_WEBHOOK_PASSWORD) {
    const expected = `Basic ${Buffer.from(`${PHONEPE_WEBHOOK_USERNAME}:${PHONEPE_WEBHOOK_PASSWORD}`).toString('base64')}`;
    return req.get('authorization') === expected;
  }

  const saltKey = process.env.PHONEPE_SALT_KEY;
  const saltIndex = process.env.PHONEPE_SALT_INDEX;
  const xVerify = req.get('x-verify');
  if (saltKey && saltIndex && xVerify) {
    const rawBody = (req as any).rawBody || JSON.stringify(req.body || {});
    const expectedHash = crypto.createHash('sha256').update(`${rawBody}${saltKey}`).digest('hex');
    return xVerify === `${expectedHash}###${saltIndex}`;
  }

  return PHONEPE_ENV !== 'production';
};

type ValidatedOrderItem = {
  menuItemId: string;
  quantity: number;
  notes: string | null;
  addOnsSelected: { name: string; price: number }[] | null;
  menuItem: any;
  lineTotal: number;
};

const normalizeAddOns = (addOns: any): { name: string; price: number }[] => {
  if (!Array.isArray(addOns)) return [];
  return addOns
    .map((addOn) => ({
      name: cleanText(addOn?.name, 80) || '',
      price: roundMoney(Number(addOn?.price || 0)),
    }))
    .filter((addOn) => addOn.name && Number.isFinite(addOn.price) && addOn.price >= 0);
};

const validateOrderItems = (rawItems: any[], menuItemMap: Map<string, any>) => {
  if (!Array.isArray(rawItems) || rawItems.length === 0 || rawItems.length > MAX_ORDER_ITEMS) {
    throw new Error(`Order must contain 1 to ${MAX_ORDER_ITEMS} item lines.`);
  }

  const validatedItems: ValidatedOrderItem[] = rawItems.map((item: any) => {
    if (!isUuid(item?.menuItemId)) throw new Error('Invalid menu item ID.');
    const menuItem = menuItemMap.get(item.menuItemId);
    if (!menuItem || !menuItem.isAvailable) {
      throw new Error('One selected menu item is no longer available.');
    }

    const quantity = Number(item.quantity);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_ITEM_QUANTITY) {
      throw new Error(`Quantity for ${menuItem.name} must be between 1 and ${MAX_ITEM_QUANTITY}.`);
    }

    const allowedAddOns = normalizeAddOns(menuItem.addOns);
    const selectedAddOns = normalizeAddOns(item.addOnsSelected);
    for (const selected of selectedAddOns) {
      const allowed = allowedAddOns.find((addOn) => addOn.name === selected.name && addOn.price === selected.price);
      if (!allowed) {
        throw new Error(`Invalid add-on selected for ${menuItem.name}.`);
      }
    }

    const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
    return {
      menuItemId: item.menuItemId,
      quantity,
      notes: cleanText(item.notes, 160) || null,
      addOnsSelected: selectedAddOns.length > 0 ? selectedAddOns : null,
      menuItem,
      lineTotal: roundMoney((menuItem.price + addOnsTotal) * quantity),
    };
  });

  const subtotal = roundMoney(validatedItems.reduce((sum, item) => sum + item.lineTotal, 0));
  const tax = roundMoney(subtotal * 0.05);
  const discount = 0;
  const finalPrice = roundMoney(subtotal + tax - discount);
  return { validatedItems, subtotal, tax, discount, finalPrice };
};

// ==========================================
// 1. CUSTOMER PORTAL ENDPOINTS
// ==========================================

// Identify Customer & Retrieve Recommendations/Favorites
app.post('/api/customers/identify', identifyRateLimit, async (req, res) => {
  const { mobile, name } = req.body;
  if (!mobile) {
    return res.status(400).json({ error: 'Mobile number is required.' });
  }

  try {
    res.json(await buildCustomerProfile(mobile, name));
  } catch (error) {
    console.error('Error identifying customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/customers/otp/send', async (req, res) => {
  if (!CUSTOMER_OTP_ENABLED) {
    return res.status(403).json({ error: 'Customer OTP is currently disabled. Use mobile number login.' });
  }

  const { mobile, name } = req.body;
  const normalizedMobile = normalizeMobile(mobile || '');

  if (normalizedMobile.length < 8) {
    return res.status(400).json({ error: 'Valid mobile number is required.' });
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await sendOtpSms(normalizedMobile, otp);

    otpSessions.set(normalizedMobile, {
      otp,
      name,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    res.json({
      success: true,
      mobile: normalizedMobile,
      expiresInSeconds: 300,
      message: 'OTP sent to the mobile number.',
    });
  } catch (error: any) {
    console.error('OTP SMS send failed:', error);
    res.status(503).json({
      error: error.message || 'Unable to send OTP SMS.',
    });
  }
});

app.post('/api/customers/otp/verify', async (req, res) => {
  if (!CUSTOMER_OTP_ENABLED) {
    return res.status(403).json({ error: 'Customer OTP is currently disabled. Use mobile number login.' });
  }

  const { mobile, otp, name } = req.body;
  const normalizedMobile = normalizeMobile(mobile || '');
  const session = otpSessions.get(normalizedMobile);

  if (!session) {
    return res.status(400).json({ error: 'OTP not found. Please request a new OTP.' });
  }
  if (Date.now() > session.expiresAt) {
    otpSessions.delete(normalizedMobile);
    return res.status(400).json({ error: 'OTP expired. Please request a new OTP.' });
  }
  if (session.otp !== String(otp || '').trim()) {
    return res.status(400).json({ error: 'Incorrect OTP. Please try again.' });
  }

  try {
    otpSessions.delete(normalizedMobile);
    res.json(await buildCustomerProfile(normalizedMobile, name || session.name));
  } catch (error) {
    console.error('Error verifying customer OTP:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch Available Menu & Categories
app.get('/api/menu', async (req, res) => {
  try {
    const categories = await prisma.menuCategory.findMany({
      where: { isActive: true },
      include: {
        items: {
          where: { isAvailable: true },
        },
      },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(categories);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ error: 'Failed to retrieve menu.' });
  }
});

app.get('/api/public/settings', async (_req, res) => {
  try {
    const settings = await getCafeSettings();
    res.json({
      cafeName: settings.cafeName,
      cafeLegalName: settings.cafeLegalName,
      gstLabel: settings.gstLabel,
      gstRate: settings.gstRate,
      upiId: settings.upiId,
      tableCount: settings.tableCount,
      billFooter: settings.billFooter,
    });
  } catch {
    res.json(DEFAULT_CAFE_SETTINGS);
  }
});

// Place Order
app.post('/api/orders', orderRateLimit, async (req, res) => {
  const {
    customerId,
    tableNumber,
    notes,
    items, // [{ menuItemId, quantity, notes, addOnsSelected }]
  } = req.body;

  if (!isUuid(customerId) || !tableNumber || !items || items.length === 0) {
    return res.status(400).json({ error: 'Missing required order fields.' });
  }

  try {
    const cleanTableNumber = cleanText(tableNumber, 16);
    if (!cleanTableNumber || !/^[a-z0-9 -]{1,16}$/i.test(cleanTableNumber)) {
      return res.status(400).json({ error: 'Invalid table number.' });
    }

    const customerExists = await prisma.customer.findUnique({ where: { id: customerId }, select: { id: true } });
    if (!customerExists) return res.status(404).json({ error: 'Customer profile not found.' });

    // Get total count of orders today to generate sequential order number
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const orderNumberPrefix = getOrderNumberPrefix(today);
    const orderCountToday = await prisma.order.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    const nextOrderNumber = `${orderNumberPrefix}${(1001 + orderCountToday).toString()}`;

    // Get all referenced Menu Items to determine targetQueue (Kitchen / Bar)
    const menuItemIds = Array.isArray(items) ? items.map((i: any) => i.menuItemId).filter(isUuid) : [];
    const menuItems = await prisma.menuItem.findMany({
      where: { id: { in: menuItemIds } },
    });

    const menuItemMap = new Map(menuItems.map((item) => [item.id, item]));
    const { validatedItems, subtotal, tax, discount, finalPrice } = validateOrderItems(items, menuItemMap);
    const stockUsage = new Map<string, number>();
    for (const item of validatedItems) {
      stockUsage.set(item.menuItemId, (stockUsage.get(item.menuItemId) || 0) + Number(item.quantity || 0));
    }

    for (const [menuItemId, quantity] of stockUsage.entries()) {
      const menuItem = menuItemMap.get(menuItemId);
      if (!menuItem) {
        return res.status(400).json({ error: `Menu item with ID ${menuItemId} was not found.` });
      }
      if (menuItem.trackStock) {
        const availableStock = menuItem.stockQuantity ?? 0;
        if (quantity <= 0) {
          return res.status(400).json({ error: `Invalid quantity for ${menuItem.name}.` });
        }
        if (availableStock < quantity) {
          return res.status(409).json({
            error: `${menuItem.name} has only ${availableStock} left in stock.`,
          });
        }
      }
    }

    // Transaction to create a new order or append items to the same table/customer's open order.
    const savedOrder = await prisma.$transaction(async (tx) => {
      const existingOpenOrder = await tx.order.findFirst({
        where: {
          customerId,
          tableNumber: cleanTableNumber,
          status: { in: ['PENDING', 'PREPARING', 'READY'] },
        },
        include: {
          kitchenQueue: true,
          barQueue: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      const createdOrder =
        existingOpenOrder ||
        (await tx.order.create({
          data: {
            orderNumber: nextOrderNumber,
            customerId,
            tableNumber: cleanTableNumber,
            notes: cleanText(notes) || null,
            totalPrice: subtotal,
            tax,
            discount,
            finalPrice,
            status: 'PENDING',
            paymentStatus: 'PENDING',
          },
        }));

      // 2. Map items and create OrderItems
      const orderItemPromises = validatedItems.map((item) => {
        const menuItem = menuItemMap.get(item.menuItemId);
        if (!menuItem) {
          throw new Error(`Menu item with ID ${item.menuItemId} not found.`);
        }

        return tx.orderItem.create({
          data: {
            orderId: createdOrder.id,
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            unitPrice: menuItem.price,
            notes: item.notes,
            addOnsSelected: item.addOnsSelected || undefined,
            targetQueue: menuItem.targetQueue,
            status: 'PENDING',
          },
        });
      });

      await Promise.all(orderItemPromises);

      await Promise.all(
        Array.from(stockUsage.entries()).map(async ([menuItemId, quantity]) => {
          const menuItem = menuItemMap.get(menuItemId);
          if (!menuItem?.trackStock) return null;
          const nextStock = Math.max((menuItem.stockQuantity ?? 0) - quantity, 0);
          await tx.menuItem.update({
            where: { id: menuItemId },
            data: {
              stockQuantity: nextStock,
              isAvailable: nextStock > 0,
            },
          });
          return tx.inventoryTransaction.create({
            data: {
              menuItemId,
              type: 'ORDER_DEDUCT',
              quantity: -quantity,
              note: `Auto deducted for order ${createdOrder.orderNumber}`,
            },
          });
        })
      );

      const hasKitchenItems = validatedItems.some((item) => menuItemMap.get(item.menuItemId)?.targetQueue === 'KITCHEN');
      const hasBarItems = validatedItems.some((item) => menuItemMap.get(item.menuItemId)?.targetQueue === 'BAR');

      if (hasKitchenItems) {
        if (existingOpenOrder?.kitchenQueue?.length) {
          await tx.kitchenQueue.updateMany({
            where: { orderId: createdOrder.id },
            data: { status: createdOrder.status === 'PENDING' ? 'PENDING' : 'PREPARING' },
          });
        } else {
          await tx.kitchenQueue.create({
            data: {
              orderId: createdOrder.id,
              status: 'PENDING',
              priority: finalPrice >= 75 ? 1 : 0,
            },
          });
        }
      }

      if (hasBarItems) {
        if (existingOpenOrder?.barQueue?.length) {
          await tx.barQueue.updateMany({
            where: { orderId: createdOrder.id },
            data: { status: createdOrder.status === 'PENDING' ? 'PENDING' : 'PREPARING' },
          });
        } else {
          await tx.barQueue.create({
            data: {
              orderId: createdOrder.id,
              status: 'PENDING',
              priority: finalPrice >= 75 ? 1 : 0,
            },
          });
        }
      }

      if (existingOpenOrder) {
        const appendedNotes =
          notes && cleanText(notes) !== existingOpenOrder.notes
            ? [existingOpenOrder.notes, cleanText(notes)].filter(Boolean).join('\nAdditional: ')
            : existingOpenOrder.notes;

        await tx.order.update({
          where: { id: createdOrder.id },
          data: {
            notes: appendedNotes || null,
            totalPrice: { increment: subtotal },
            tax: { increment: tax },
            discount: { increment: discount },
            finalPrice: { increment: finalPrice },
            status: createdOrder.status === 'PENDING' ? 'PENDING' : 'PREPARING',
          },
        });
      }

      // 3. Award loyalty points (1 point per rupee spent)
      const pointsEarned = Math.floor(finalPrice);
      await tx.customer.update({
        where: { id: customerId },
        data: {
          loyaltyPoints: {
            increment: pointsEarned,
          },
        },
      });

      return createdOrder;
    });

    // Fetch complete populated order
    const populatedOrder = await prisma.order.findUnique({
      where: { id: savedOrder.id },
      include: {
        customer: true,
        items: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    if (!populatedOrder) {
      return res.status(500).json({ error: 'Order creation failed to load.' });
    }

    // BROADCAST sockets in real-time
    // We emit both events so existing order cards refresh when items are appended.
    io.emit('order:new', populatedOrder);
    io.emit('order:updated', populatedOrder);

    res.status(201).json(populatedOrder);
  } catch (error: any) {
    console.error('Error placing order:', error);
    const validationPatterns = ['Invalid', 'Quantity', 'Order must', 'not found', 'not available', 'add-on', 'table number'];
    const statusCode = validationPatterns.some((pattern) => String(error.message || '').includes(pattern)) ? 400 : 500;
    res.status(statusCode).json({ error: error.message || 'Failed to place order.' });
  }
});

// Track Order Status
app.get('/api/orders/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        items: {
          include: {
            menuItem: true,
          },
        },
      },
    });
    if (!order) {
      return res.status(404).json({ error: 'Order not found.' });
    }
    const admin = getAdminFromRequest(req);
    const customerId = typeof req.query.customerId === 'string' ? req.query.customerId : '';
    if (!admin && (!customerId || customerId !== order.customerId)) {
      return res.status(403).json({ error: 'Order access denied.' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.post('/api/orders/:id/feedback', async (req, res) => {
  const { id } = req.params;
  const rating = Number(req.body.rating);
  const customerId = typeof req.body.customerId === 'string' ? req.body.customerId : '';
  const comment = cleanText(req.body.comment, 500) || null;

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Rating must be between 1 and 5.' });
  }

  try {
    const order = await prisma.order.findUnique({ where: { id } });
    if (!order) return res.status(404).json({ error: 'Order not found.' });
    if (customerId !== order.customerId) return res.status(403).json({ error: 'Feedback access denied.' });

    const feedback = await prisma.customerFeedback.create({
      data: {
        orderId: id,
        customerId: order.customerId,
        rating,
        comment,
      },
    });

    io.emit('feedback:new', feedback);
    res.status(201).json(feedback);
  } catch (error) {
    console.error('Feedback save error:', error);
    res.status(500).json({ error: 'Failed to save feedback.' });
  }
});

app.post('/api/orders/:id/pay', authenticateAdmin, requireRoles('MANAGER', 'BILLING'), async (req, res) => {
  const { id } = req.params;
  const { paymentMethod = 'COUNTER' } = req.body;

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: { customer: true, items: { include: { menuItem: true } } },
    });

    if (!order) return res.status(404).json({ error: 'Order not found.' });
    if (order.status === 'CANCELLED') {
      return res.status(400).json({ error: 'Cancelled orders cannot be paid.' });
    }

    const paidOrder = await markOrderPaid(id, paymentMethod);
    res.json(paidOrder);
  } catch (error) {
    console.error('Error marking order as paid:', error);
    res.status(500).json({ error: 'Failed to mark order as paid.' });
  }
});

app.post('/api/payments/phonepe/create', async (req, res) => {
  const { orderId, customerId } = req.body;

  if (!orderId) {
    return res.status(400).json({ error: 'Order ID is required.' });
  }
  if (!isPhonePeConfigured()) {
    return res.status(503).json({
      error: 'PhonePe gateway is not configured for this cafe yet. Use counter payment or add PhonePe credentials in backend/.env.',
    });
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { customer: true, items: { include: { menuItem: true } } },
    });

    if (!order) return res.status(404).json({ error: 'Order not found.' });
    if (customerId && order.customerId !== customerId) {
      return res.status(403).json({ error: 'This customer cannot pay for this order.' });
    }
    if (order.status === 'CANCELLED') {
      return res.status(400).json({ error: 'Cancelled orders cannot be paid.' });
    }
    if (order.isPaid) {
      return res.json({ order, status: 'PAID', redirectUrl: null });
    }

    const merchantOrderId = `${CAFE_NAME.replace(/[^a-z0-9]/gi, '').slice(0, 12).toUpperCase() || 'CAFE'}-${Date.now()}-${order.orderNumber.replace(/[^a-z0-9]/gi, '')}`;
    const redirectUrl =
      process.env.PHONEPE_REDIRECT_URL ||
      `${getPublicBaseUrl(req)}/payment/return?orderId=${encodeURIComponent(order.id)}&merchantOrderId=${encodeURIComponent(merchantOrderId)}`;

    const payload = {
      merchantOrderId,
      amount: Math.round(order.finalPrice * 100),
      expireAfter: 1200,
      metaInfo: {
        udf1: order.orderNumber,
        udf2: order.tableNumber,
        udf3: order.customer?.mobile || '',
      },
      paymentFlow: {
        type: 'PG_CHECKOUT',
        message: `${CAFE_LEGAL_NAME} ${order.orderNumber}`,
        merchantUrls: {
          redirectUrl,
        },
      },
    };

    const phonePeResponse = await phonePeRequest('/checkout/v2/pay', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const gatewayOrderId = phonePeResponse.orderId || phonePeResponse.data?.orderId || null;
    const hostedCheckoutUrl =
      phonePeResponse.redirectUrl ||
      phonePeResponse.data?.redirectUrl ||
      phonePeResponse.instrumentResponse?.redirectInfo?.url ||
      phonePeResponse.data?.instrumentResponse?.redirectInfo?.url ||
      null;

    const payment = await prisma.payment.create({
      data: {
        orderId: order.id,
        gateway: 'PHONEPE',
        merchantOrderId,
        gatewayOrderId,
        amount: order.finalPrice,
        status: 'PENDING',
        method: 'PHONEPE',
        redirectUrl: hostedCheckoutUrl,
        rawResponse: phonePeResponse,
      },
    });

    const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: {
        paymentStatus: 'PENDING',
        paymentGateway: 'PHONEPE',
        gatewayOrderId: gatewayOrderId || merchantOrderId,
      },
      include: { customer: true, items: { include: { menuItem: true } } },
    });

    emitPaymentStatus(payment, updatedOrder);
    res.status(201).json({
      payment,
      order: updatedOrder,
      redirectUrl: hostedCheckoutUrl,
      merchantOrderId,
    });
  } catch (error: any) {
    console.error('PhonePe payment create error:', error);
    res.status(502).json({ error: error.message || 'PhonePe payment could not be started.' });
  }
});

app.get('/api/payments/phonepe/status/:merchantOrderId', async (req, res) => {
  const { merchantOrderId } = req.params;

  try {
    const payment = await prisma.payment.findUnique({
      where: { merchantOrderId },
      include: { order: { include: { customer: true, items: { include: { menuItem: true } } } } },
    });
    if (!payment) return res.status(404).json({ error: 'Payment not found.' });

    if (!isPhonePeConfigured()) {
      return res.json({ payment, order: payment.order, status: payment.status });
    }

    const statusResponse = await phonePeRequest(`/checkout/v2/order/${encodeURIComponent(merchantOrderId)}/status`, {
      method: 'GET',
    });
    const status = getPhonePePaymentState(statusResponse);
    const gatewayPaymentId = extractPhonePePaymentId(statusResponse);

    const updatedPayment = await prisma.payment.update({
      where: { merchantOrderId },
      data: {
        status,
        gatewayPaymentId: gatewayPaymentId || payment.gatewayPaymentId,
        rawResponse: statusResponse,
      },
    });

    let updatedOrder = payment.order;
    if (status === 'PAID' && !payment.order.isPaid) {
      updatedOrder = await markOrderPaid(payment.orderId, 'PHONEPE', {
        paymentGateway: 'PHONEPE',
        gatewayOrderId: payment.gatewayOrderId || merchantOrderId,
        gatewayPaymentId,
      });
    } else if (status === 'FAILED' || status === 'CANCELLED') {
      updatedOrder = await prisma.order.update({
        where: { id: payment.orderId },
        data: { paymentStatus: status },
        include: { customer: true, items: { include: { menuItem: true } } },
      });
      emitOrderStatus(updatedOrder);
    }

    emitPaymentStatus(updatedPayment);
    res.json({ payment: updatedPayment, order: updatedOrder, status });
  } catch (error: any) {
    console.error('PhonePe payment status error:', error);
    res.status(502).json({ error: error.message || 'PhonePe payment status could not be checked.' });
  }
});

app.post('/api/payments/phonepe/webhook', async (req, res) => {
  if (!verifyPhonePeWebhook(req)) {
    return res.status(401).json({ error: 'Invalid PhonePe webhook signature.' });
  }

  try {
    const body = req.body || {};
    const merchantOrderId =
      body.merchantOrderId ||
      body.data?.merchantOrderId ||
      body.payload?.merchantOrderId ||
      body.orderId ||
      body.data?.orderId;

    if (!merchantOrderId) {
      return res.status(400).json({ error: 'PhonePe webhook is missing merchantOrderId.' });
    }

    const payment = await prisma.payment.findUnique({
      where: { merchantOrderId },
      include: { order: { include: { customer: true, items: { include: { menuItem: true } } } } },
    });
    if (!payment) return res.status(404).json({ error: 'Payment not found.' });

    const status = getPhonePePaymentState(body);
    const gatewayPaymentId = extractPhonePePaymentId(body);
    const updatedPayment = await prisma.payment.update({
      where: { merchantOrderId },
      data: {
        status,
        gatewayPaymentId: gatewayPaymentId || payment.gatewayPaymentId,
        rawWebhook: body,
      },
    });

    let updatedOrder = payment.order;
    if (status === 'PAID' && !payment.order.isPaid) {
      updatedOrder = await markOrderPaid(payment.orderId, 'PHONEPE', {
        paymentGateway: 'PHONEPE',
        gatewayOrderId: payment.gatewayOrderId || merchantOrderId,
        gatewayPaymentId,
      });
    } else if (status === 'FAILED' || status === 'CANCELLED') {
      updatedOrder = await prisma.order.update({
        where: { id: payment.orderId },
        data: { paymentStatus: status },
        include: { customer: true, items: { include: { menuItem: true } } },
      });
      emitOrderStatus(updatedOrder);
    }

    emitPaymentStatus(updatedPayment, updatedOrder);
    res.json({ received: true });
  } catch (error) {
    console.error('PhonePe webhook error:', error);
    res.status(500).json({ error: 'PhonePe webhook could not be processed.' });
  }
});

app.post('/api/orders/:id/cancel', async (req, res) => {
  const { id } = req.params;
  const { customerId } = req.body;

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: { customer: true, items: { include: { menuItem: true } } },
    });

    if (!order) return res.status(404).json({ error: 'Order not found.' });
    if (customerId && order.customerId !== customerId) {
      return res.status(403).json({ error: 'This customer cannot cancel this order.' });
    }
    if (['READY', 'SERVED', 'CANCELLED'].includes(order.status)) {
      return res.status(400).json({ error: 'This order can no longer be cancelled.' });
    }
    if (!order.isPaid || !order.cancelUntil) {
      return res.status(400).json({ error: 'Payment is required before the 5 minute cancellation window starts.' });
    }
    if (new Date() > order.cancelUntil) {
      return res.status(400).json({
        error: `Cancellation window closed. Orders can only be cancelled within ${CUSTOMER_CANCEL_WINDOW_MINUTES} minutes. Refund is not available after this window.`,
      });
    }

    const cancelledOrder = await prisma.$transaction(async (tx) => {
      await tx.orderItem.updateMany({
        where: { orderId: id },
        data: { status: 'CANCELLED' },
      });
      await tx.kitchenQueue.updateMany({
        where: { orderId: id },
        data: { status: 'CANCELLED' },
      });
      await tx.barQueue.updateMany({
        where: { orderId: id },
        data: { status: 'CANCELLED' },
      });
      return tx.order.update({
        where: { id },
        data: {
          status: 'CANCELLED',
          cancelledAt: new Date(),
          refundStatus: 'NOT_ALLOWED',
          refundDeniedReason: 'Customer cancellation. No refund workflow is offered after order placement.',
        },
        include: { customer: true, items: { include: { menuItem: true } } },
      });
    });

    emitOrderStatus(cancelledOrder);
    res.json(cancelledOrder);
  } catch (error) {
    console.error('Error cancelling order:', error);
    res.status(500).json({ error: 'Failed to cancel order.' });
  }
});

app.get('/api/orders/:id/bill', authenticateAdmin, requireRoles('MANAGER', 'BILLING'), async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: req.params.id },
      include: { customer: true, items: { include: { menuItem: true } } },
    });

    if (!order) return res.status(404).json({ error: 'Order not found.' });
    const settings = await getCafeSettings();

    res.json({
      cafeName: settings.cafeLegalName,
      gstLabel: settings.gstLabel,
      settings,
      order,
      printable: true,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bill.' });
  }
});

app.get('/api/qr/table/:tableNumber', async (req, res) => {
  const tableNumber = req.params.tableNumber;
  const url = `${getPublicBaseUrl(req)}/?table=${encodeURIComponent(tableNumber)}`;
  const svg = await QRCode.toString(url, {
    type: 'svg',
    margin: 2,
    color: {
      dark: '#21160f',
      light: '#f7efe3',
    },
  });
  res.type('image/svg+xml').send(svg);
});

app.get('/api/qr/table/:tableNumber/meta', (req, res) => {
  const tableNumber = req.params.tableNumber;
  res.json({
    tableNumber,
    url: `${getPublicBaseUrl(req)}/?table=${encodeURIComponent(tableNumber)}`,
    qrSvg: `/api/qr/table/${encodeURIComponent(tableNumber)}`,
  });
});

// ==========================================
// 2. ADMIN PORTAL & AUTHENTICATION ENDPOINTS
// ==========================================

// Admin Login
app.post('/api/admin/login', loginRateLimit, async (req, res) => {
  const username = cleanText(req.body.username, 80);
  const password = typeof req.body.password === 'string' ? req.body.password : '';
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required.' });
  }

  try {
    const user = await prisma.adminUser.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role, name: user.name },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.post('/api/admin/change-password', authenticateAdmin, async (req: any, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword || String(newPassword).length < 8) {
    return res.status(400).json({ error: 'Current password and a new password of at least 8 characters are required.' });
  }

  try {
    const user = await prisma.adminUser.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: 'Staff account not found.' });

    const matches = await bcrypt.compare(currentPassword, user.password);
    if (!matches) return res.status(401).json({ error: 'Current password is incorrect.' });

    await prisma.adminUser.update({
      where: { id: user.id },
      data: { password: await bcrypt.hash(newPassword, 10) },
    });

    res.json({ message: 'Password changed successfully.' });
  } catch (error) {
    console.error('Password change error:', error);
    res.status(500).json({ error: 'Failed to change password.' });
  }
});

app.get('/api/admin/system/status', authenticateAdmin, async (_req, res) => {
  const settings = await getCafeSettings();
  const provider = (process.env.SMS_PROVIDER || '').toLowerCase();
  const smsConfigured =
    provider === 'fast2sms'
      ? Boolean(process.env.FAST2SMS_API_KEY)
      : provider === 'twilio'
      ? Boolean(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM_NUMBER)
      : false;

  res.json({
    cafeName: settings.cafeName,
    cafeLegalName: settings.cafeLegalName,
    settings,
    sms: {
      provider: provider || 'not_configured',
      configured: smsConfigured,
      customerOtpEnabled: CUSTOMER_OTP_ENABLED,
      scope: 'one_gateway_account_per_cafe',
      note: 'Customers do not need SMS accounts. The cafe sends all OTPs through its configured gateway.',
    },
    payments: {
      gateway: PAYMENT_GATEWAY || 'manual_counter',
      phonePeConfigured: isPhonePeConfigured(),
      phonePeEnvironment: PHONEPE_ENV,
      webhookPath: '/api/payments/phonepe/webhook',
      note: 'Use one PhonePe merchant account per cafe/client. Customers do not need PhonePe business accounts.',
    },
    localNetwork: true,
    pwa: true,
  });
});

app.get('/api/admin/users', authenticateAdmin, requireRoles('MANAGER'), async (_req, res) => {
  try {
    const users = await prisma.adminUser.findMany({
      select: { id: true, username: true, name: true, role: true, createdAt: true, updatedAt: true },
      orderBy: { createdAt: 'asc' },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load staff accounts.' });
  }
});

app.post('/api/admin/users', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { username, password, name, role = 'STAFF' } = req.body;
  const normalizedRole = String(role).toUpperCase();
  if (!username || !password || !name) {
    return res.status(400).json({ error: 'Username, password, and name are required.' });
  }
  if (String(password).length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' });
  }
  if (!validStaffRoles.includes(normalizedRole)) {
    return res.status(400).json({ error: 'Invalid staff role.' });
  }

  try {
    const user = await prisma.adminUser.create({
      data: {
        username,
        name,
        role: normalizedRole,
        password: await bcrypt.hash(password, 10),
      },
      select: { id: true, username: true, name: true, role: true, createdAt: true, updatedAt: true },
    });
    res.status(201).json(user);
  } catch (error: any) {
    if (error?.code === 'P2002') return res.status(409).json({ error: 'Username already exists.' });
    console.error('Staff creation error:', error);
    res.status(500).json({ error: 'Failed to create staff account.' });
  }
});

app.delete('/api/admin/users/:id', authenticateAdmin, requireRoles('MANAGER'), async (req: any, res) => {
  if (req.params.id === req.user.id) {
    return res.status(400).json({ error: 'You cannot delete the account currently signed in.' });
  }
  try {
    await prisma.adminUser.delete({ where: { id: req.params.id } });
    res.json({ message: 'Staff account deleted.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete staff account.' });
  }
});

app.get('/api/admin/staff/attendance', authenticateAdmin, async (req, res) => {
  const { start, end } = getDayRange(typeof req.query.date === 'string' ? req.query.date : undefined);

  try {
    const shifts = await prisma.staffShift.findMany({
      where: {
        checkInAt: { gte: start, lt: end },
      },
      include: {
        user: { select: { id: true, username: true, name: true, role: true } },
      },
      orderBy: { checkInAt: 'desc' },
    });

    const activeShifts = await prisma.staffShift.findMany({
      where: { checkOutAt: null },
      include: {
        user: { select: { id: true, username: true, name: true, role: true } },
      },
      orderBy: { checkInAt: 'desc' },
    });

    res.json({
      date: start.toISOString().slice(0, 10),
      activeCount: activeShifts.length,
      activeShifts,
      shifts,
    });
  } catch (error) {
    console.error('Staff attendance load error:', error);
    res.status(500).json({ error: 'Failed to load staff attendance.' });
  }
});

app.get('/api/admin/staff/attendance.csv', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { start, end, dates } = getDateSeries(
    typeof req.query.from === 'string' ? req.query.from : undefined,
    typeof req.query.to === 'string' ? req.query.to : undefined
  );

  try {
    const [users, shifts] = await Promise.all([
      prisma.adminUser.findMany({
        select: { id: true, name: true, username: true, role: true },
        orderBy: [{ name: 'asc' }, { username: 'asc' }],
      }),
      prisma.staffShift.findMany({
        where: { checkInAt: { gte: start, lt: end } },
        orderBy: { checkInAt: 'asc' },
      }),
    ]);

    const shiftsByUserAndDate = new Map<string, any[]>();
    for (const shift of shifts) {
      const key = `${shift.userId}:${formatDateKey(shift.checkInAt)}`;
      const rows = shiftsByUserAndDate.get(key) || [];
      rows.push(shift);
      shiftsByUserAndDate.set(key, rows);
    }

    const headers = ['Employee Name', 'Username', 'Role', ...dates];
    const rows = users.map((user) => {
      const attendanceCells = dates.map((date) => {
        const dayShifts = shiftsByUserAndDate.get(`${user.id}:${date}`) || [];
        const completed = dayShifts.filter((shift) => shift.checkInAt && shift.checkOutAt);
        if (completed.length === 0) return 'Absent';
        return completed
          .map((shift) => {
            const inTime = new Date(shift.checkInAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            const outTime = new Date(shift.checkOutAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            return `Present (${inTime} - ${outTime})`;
          })
          .join(' | ');
      });
      return [user.name, user.username, user.role, ...attendanceCells];
    });

    const csv = [headers, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
    const filename = `staff-attendance-${dates[0]}-to-${dates[dates.length - 1]}.csv`;
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(csv);
  } catch (error) {
    console.error('Staff attendance CSV error:', error);
    res.status(500).json({ error: 'Failed to export staff attendance CSV.' });
  }
});

app.post('/api/admin/staff/check-in', authenticateAdmin, async (req: any, res) => {
  const requestedUserId = req.body.userId || req.user.id;
  const note = req.body.note || null;

  if (requestedUserId !== req.user.id && req.user.role !== 'ADMIN' && req.user.role !== 'MANAGER') {
    return res.status(403).json({ error: 'Only managers can check in another staff member.' });
  }

  try {
    const staff = await prisma.adminUser.findUnique({ where: { id: requestedUserId } });
    if (!staff) return res.status(404).json({ error: 'Staff account not found.' });

    const activeShift = await prisma.staffShift.findFirst({
      where: { userId: requestedUserId, checkOutAt: null },
    });
    if (activeShift) return res.status(409).json({ error: `${staff.name} is already checked in.` });

    const shift = await prisma.staffShift.create({
      data: { userId: requestedUserId, note },
      include: { user: { select: { id: true, username: true, name: true, role: true } } },
    });

    io.emit('staff:attendance:updated', shift);
    res.status(201).json(shift);
  } catch (error) {
    console.error('Staff check-in error:', error);
    res.status(500).json({ error: 'Failed to check in staff.' });
  }
});

app.post('/api/admin/staff/check-out', authenticateAdmin, async (req: any, res) => {
  const requestedUserId = req.body.userId || req.user.id;

  if (requestedUserId !== req.user.id && req.user.role !== 'ADMIN' && req.user.role !== 'MANAGER') {
    return res.status(403).json({ error: 'Only managers can check out another staff member.' });
  }

  try {
    const activeShift = await prisma.staffShift.findFirst({
      where: { userId: requestedUserId, checkOutAt: null },
      orderBy: { checkInAt: 'desc' },
      include: { user: { select: { id: true, username: true, name: true, role: true } } },
    });
    if (!activeShift) return res.status(404).json({ error: 'No active check-in found for this staff member.' });

    const shift = await prisma.staffShift.update({
      where: { id: activeShift.id },
      data: { checkOutAt: new Date() },
      include: { user: { select: { id: true, username: true, name: true, role: true } } },
    });

    io.emit('staff:attendance:updated', shift);
    res.json(shift);
  } catch (error) {
    console.error('Staff check-out error:', error);
    res.status(500).json({ error: 'Failed to check out staff.' });
  }
});

// Fetch Active Order Queue (Admin/KDS/Bar view)
app.get('/api/admin/orders', authenticateAdmin, requireRoles('MANAGER', 'KITCHEN', 'BAR', 'BILLING', 'STAFF'), async (req, res) => {
  try {
    const limit = Math.min(Math.max(parseInt(String(req.query.limit || '200'), 10) || 200, 25), 500);
    const activeOrders = await prisma.order.findMany({
      include: {
        customer: true,
        items: {
          include: {
            menuItem: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
    res.json(activeOrders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch active orders.' });
  }
});

// Update Order Status
app.put('/api/admin/orders/:id/status', authenticateAdmin, requireRoles('MANAGER', 'KITCHEN', 'BAR', 'BILLING'), async (req, res) => {
  const { id } = req.params;
  const { status } = req.body as { status: OrderStatus };

  if (!Object.values(OrderStatus).includes(status)) {
    return res.status(400).json({ error: 'Invalid order status value.' });
  }

  try {
    // Transaction to update Order AND optionally its items
    const updatedOrder = await prisma.$transaction(async (tx) => {
      const order = await tx.order.update({
        where: { id },
        data: { status },
        include: {
          customer: true,
          items: {
            include: {
              menuItem: true,
            },
          },
        },
      });

      // If order is READY, SERVED, or CANCELLED, we should automatically update all pending items
      if (['READY', 'SERVED', 'CANCELLED'].includes(status)) {
        await tx.orderItem.updateMany({
          where: { orderId: id },
          data: { status },
        });
      }

      await tx.kitchenQueue.updateMany({
        where: { orderId: id },
        data: { status },
      });
      await tx.barQueue.updateMany({
        where: { orderId: id },
        data: { status },
      });

      return order;
    });

    const refreshedOrder = await prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        items: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    // Broadcast Socket Event
    emitOrderStatus(refreshedOrder);

    res.json(refreshedOrder);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Failed to update order status.' });
  }
});

app.post('/api/admin/orders/:id/refund', authenticateAdmin, requireRoles('MANAGER', 'BILLING'), async (req, res) => {
  try {
    const order = await prisma.order.findUnique({ where: { id: req.params.id } });
    if (!order) return res.status(404).json({ error: 'Order not found.' });

    const updatedOrder = await prisma.order.update({
      where: { id: req.params.id },
      data: {
        refundStatus: 'DENIED',
        refundDeniedReason: `Refund denied. Orders are locked ${CUSTOMER_CANCEL_WINDOW_MINUTES} minutes after placement, and this POS does not issue customer refunds after that point.`,
      },
      include: {
        customer: true,
        items: { include: { menuItem: true } },
      },
    });

    emitOrderStatus(updatedOrder);
    res.json(updatedOrder);
  } catch (error) {
    console.error('Refund denial error:', error);
    res.status(500).json({ error: 'Failed to update refund status.' });
  }
});

// Update Individual Order Item Status (KDS / Bar)
app.put('/api/admin/orders/:orderId/items/:itemId/status', authenticateAdmin, requireRoles('MANAGER', 'KITCHEN', 'BAR'), async (req, res) => {
  const { orderId, itemId } = req.params;
  const { status } = req.body as { status: OrderStatus };

  if (!Object.values(OrderStatus).includes(status)) {
    return res.status(400).json({ error: 'Invalid order item status.' });
  }

  try {
    // 1. Update OrderItem
    await prisma.orderItem.update({
      where: { id: itemId },
      data: { status },
    });

    // 2. Fetch other items in the order to see if we should auto-advance overall Order status
    const allItems = await prisma.orderItem.findMany({
      where: { orderId },
    });

    let overallStatus: OrderStatus = 'PREPARING';

    const allCancelled = allItems.every((item) => item.status === 'CANCELLED');
    const allServed = allItems.every((item) => item.status === 'SERVED' || item.status === 'CANCELLED');
    const allReady = allItems.every(
      (item) => item.status === 'READY' || item.status === 'SERVED' || item.status === 'CANCELLED'
    );
    const anyPreparing = allItems.some((item) => item.status === 'PREPARING');

    if (allCancelled) {
      overallStatus = 'CANCELLED';
    } else if (allServed) {
      overallStatus = 'SERVED';
    } else if (allReady) {
      overallStatus = 'READY';
    } else if (anyPreparing) {
      overallStatus = 'PREPARING';
    }

    // Update overall Order status
    await prisma.order.update({
      where: { id: orderId },
      data: { status: overallStatus },
    });

    await prisma.kitchenQueue.updateMany({
      where: { orderId },
      data: { status: overallStatus },
    });
    await prisma.barQueue.updateMany({
      where: { orderId },
      data: { status: overallStatus },
    });

    // Fetch fully updated Order for broadcast
    const refreshedOrder = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        customer: true,
        items: {
          include: {
            menuItem: true,
          },
        },
      },
    });

    // Broadcast update
    emitOrderStatus(refreshedOrder);

    res.json(refreshedOrder);
  } catch (error) {
    console.error('Error updating order item status:', error);
    res.status(500).json({ error: 'Failed to update order item status.' });
  }
});

// Admin Analytics API
app.get('/api/admin/analytics', authenticateAdmin, async (req, res) => {
  try {
    const [allOrders, activeTables, orderItems, allCustomers, customerOrders, recommendationRows] = await Promise.all([
      prisma.order.findMany({
        where: { status: { not: 'CANCELLED' } },
        select: { finalPrice: true, createdAt: true, status: true },
      }),
      prisma.order.groupBy({
        by: ['tableNumber'],
        where: {
          status: { in: ['PENDING', 'PREPARING'] },
        },
      }),
      prisma.orderItem.findMany({
        where: { order: { status: { not: 'CANCELLED' } } },
        select: { quantity: true, menuItem: { select: { name: true } } },
      }),
      prisma.customer.findMany({
        select: { id: true, name: true, mobile: true, loyaltyPoints: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.order.findMany({
        where: { status: { not: 'CANCELLED' } },
        select: { customerId: true, finalPrice: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.recommendation.groupBy({
        by: ['source'],
        _count: { source: true },
      }),
    ]);

    const totalRevenue = allOrders.reduce((sum, o) => sum + o.finalPrice, 0);
    const totalOrdersCount = allOrders.length;
    const averageOrderValue = totalOrdersCount > 0 ? totalRevenue / totalOrdersCount : 0;
    const tableOccupancy = activeTables.length;

    const itemSales: Record<string, number> = {};
    orderItems.forEach((oi) => {
      const name = oi.menuItem.name;
      itemSales[name] = (itemSales[name] || 0) + oi.quantity;
    });

    const bestSellers = Object.entries(itemSales)
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);

    // 4. Peak Hours Analytics (sales count grouped by hour)
    const hourSales: Record<number, number> = {};
    // Initialize 24 hours
    for (let i = 0; i < 24; i++) hourSales[i] = 0;

    allOrders.forEach((o) => {
      const hour = new Date(o.createdAt).getHours();
      hourSales[hour] = (hourSales[hour] || 0) + 1;
    });

    const peakHours = Object.entries(hourSales).map(([hour, count]) => ({
      hour: parseInt(hour),
      count,
    }));

    const customerStats = new Map<string, { totalSpent: number; orderCount: number; lastVisit: Date | null }>();
    for (const order of customerOrders) {
      const stat = customerStats.get(order.customerId) || { totalSpent: 0, orderCount: 0, lastVisit: null };
      stat.totalSpent += order.finalPrice;
      stat.orderCount += 1;
      if (!stat.lastVisit || new Date(order.createdAt).getTime() > new Date(stat.lastVisit).getTime()) {
        stat.lastVisit = order.createdAt;
      }
      customerStats.set(order.customerId, stat);
    }

    const formattedCustomers = allCustomers.map((cust) => {
      const stat = customerStats.get(cust.id) || { totalSpent: 0, orderCount: 0, lastVisit: null };
      return {
        id: cust.id,
        name: cust.name || 'Anonymous',
        mobile: cust.mobile,
        loyaltyPoints: cust.loyaltyPoints,
        totalSpent: stat.totalSpent,
        orderCount: stat.orderCount,
        lastVisit: stat.lastVisit,
        createdAt: cust.createdAt,
      };
    }).sort((a, b) => {
      const aLast = a.lastVisit ? new Date(a.lastVisit).getTime() : 0;
      const bLast = b.lastVisit ? new Date(b.lastVisit).getTime() : 0;
      return bLast - aLast || b.totalSpent - a.totalSpent;
    });

    const recommendationAnalytics = recommendationRows.map((row) => ({
      source: row.source,
      count: row._count.source,
    }));

    res.json({
      revenue: {
        totalRevenue,
        totalOrders: totalOrdersCount,
        averageOrderValue,
      },
      tableOccupancy,
      bestSellers,
      peakHours,
      customers: formattedCustomers,
      recommendationAnalytics,
    });
  } catch (error) {
    console.error('Error generating analytics:', error);
    res.status(500).json({ error: 'Failed to retrieve analytics.' });
  }
});

app.get('/api/admin/reports/daily-close', authenticateAdmin, async (req, res) => {
  const { start, end } = getDayRange(typeof req.query.date === 'string' ? req.query.date : undefined);

  try {
    const orders = await prisma.order.findMany({
      where: { createdAt: { gte: start, lt: end } },
      include: {
        customer: true,
        items: { include: { menuItem: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    const completedOrders = orders.filter((order) => order.status !== 'CANCELLED');
    const paidOrders = completedOrders.filter((order) => order.isPaid);
    const revenueByMethod = paidOrders.reduce<Record<string, number>>((acc, order) => {
      const method = order.paymentMethod || 'UNSPECIFIED';
      acc[method] = (acc[method] || 0) + order.finalPrice;
      return acc;
    }, {});

    const itemMap = new Map<string, { name: string; quantity: number; revenue: number }>();
    for (const order of completedOrders) {
      for (const item of order.items) {
        const row = itemMap.get(item.menuItemId) || { name: item.menuItem.name, quantity: 0, revenue: 0 };
        row.quantity += item.quantity;
        row.revenue += item.unitPrice * item.quantity;
        itemMap.set(item.menuItemId, row);
      }
    }

    res.json({
      date: start.toISOString().slice(0, 10),
      generatedAt: new Date(),
      totals: {
        orders: orders.length,
        completedOrders: completedOrders.length,
        cancelledOrders: orders.length - completedOrders.length,
        paidOrders: paidOrders.length,
        unpaidOrders: completedOrders.length - paidOrders.length,
        grossSales: completedOrders.reduce((sum, order) => sum + order.totalPrice, 0),
        tax: completedOrders.reduce((sum, order) => sum + order.tax, 0),
        discount: completedOrders.reduce((sum, order) => sum + order.discount, 0),
        netRevenue: completedOrders.reduce((sum, order) => sum + order.finalPrice, 0),
      },
      revenueByMethod,
      tableCount: new Set(completedOrders.map((order) => order.tableNumber)).size,
      topItems: Array.from(itemMap.values()).sort((a, b) => b.quantity - a.quantity).slice(0, 8),
    });
  } catch (error) {
    console.error('Daily close report error:', error);
    res.status(500).json({ error: 'Failed to generate daily close report.' });
  }
});

app.get('/api/admin/tables/occupancy', authenticateAdmin, async (_req, res) => {
  try {
    const activeOrders = await prisma.order.findMany({
      where: { status: { in: ['PENDING', 'PREPARING', 'READY'] } },
      include: {
        customer: true,
        items: { include: { menuItem: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    const latestByTable = new Map<string, any>();
    for (const order of activeOrders) {
      if (!latestByTable.has(order.tableNumber)) latestByTable.set(order.tableNumber, order);
    }

    const tables = Array.from({ length: 20 }, (_, index) => {
      const tableNumber = String(index + 1);
      const order = latestByTable.get(tableNumber);
      return {
        tableNumber,
        occupied: Boolean(order),
        order: order
          ? {
              id: order.id,
              orderNumber: order.orderNumber,
              status: order.status,
              isPaid: order.isPaid,
              total: order.finalPrice,
              customerName: order.customer?.name,
              startedAt: order.createdAt,
              itemCount: order.items.reduce((sum: number, item: any) => sum + item.quantity, 0),
            }
          : null,
      };
    });

    res.json({ generatedAt: new Date(), occupied: tables.filter((table) => table.occupied).length, total: tables.length, tables });
  } catch (error) {
    console.error('Table occupancy error:', error);
    res.status(500).json({ error: 'Failed to load table occupancy.' });
  }
});

app.get('/api/admin/backup', authenticateAdmin, requireRoles('MANAGER'), async (_req, res) => {
  try {
    res.json(await buildBackupPayload());
  } catch (error) {
    console.error('Backup export error:', error);
    res.status(500).json({ error: 'Failed to export backup.' });
  }
});

app.post('/api/admin/backup/save-local', authenticateAdmin, requireRoles('MANAGER'), async (_req, res) => {
  try {
    const settings = await getCafeSettings();
    const backupFolder = path.resolve(String(settings.backupFolder || DEFAULT_CAFE_SETTINGS.backupFolder));
    await fs.mkdir(backupFolder, { recursive: true });
    const backup = await buildBackupPayload();
    const filename = `niva-pos-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const fullPath = path.join(backupFolder, filename);
    await fs.writeFile(fullPath, JSON.stringify(backup, null, 2), 'utf8');
    res.json({ message: 'Local backup saved.', path: fullPath, generatedAt: backup.generatedAt });
  } catch (error) {
    console.error('Local backup error:', error);
    res.status(500).json({ error: 'Failed to save local backup.' });
  }
});

app.get('/api/admin/settings', authenticateAdmin, requireRoles('MANAGER'), async (_req, res) => {
  try {
    res.json(await getCafeSettings());
  } catch {
    res.status(500).json({ error: 'Failed to load settings.' });
  }
});

app.put('/api/admin/settings', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  try {
    const settings = await saveCafeSettings(req.body || {});
    res.json(settings);
  } catch (error) {
    console.error('Settings update error:', error);
    res.status(500).json({ error: 'Failed to update settings.' });
  }
});

app.get('/api/admin/feedback', authenticateAdmin, requireRoles('MANAGER'), async (_req, res) => {
  try {
    const feedback = await prisma.customerFeedback.findMany({
      include: {
        customer: { select: { name: true, mobile: true } },
        order: { select: { orderNumber: true, tableNumber: true, finalPrice: true, createdAt: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load feedback.' });
  }
});

app.get('/api/admin/inventory/transactions', authenticateAdmin, requireRoles('MANAGER'), async (_req, res) => {
  try {
    const rows = await prisma.inventoryTransaction.findMany({
      include: {
        menuItem: { select: { name: true, stockQuantity: true, lowStockAt: true } },
        createdBy: { select: { name: true, role: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
    res.json(rows);
  } catch {
    res.status(500).json({ error: 'Failed to load inventory transactions.' });
  }
});

app.post('/api/admin/inventory/transactions', authenticateAdmin, requireRoles('MANAGER'), async (req: any, res) => {
  const menuItemId = req.body.menuItemId;
  const type = String(req.body.type || '').toUpperCase();
  const quantity = parseInt(String(req.body.quantity || '0'), 10);
  const note = cleanText(req.body.note, 240) || null;
  const unitCost = req.body.unitCost === undefined || req.body.unitCost === '' ? null : Number(req.body.unitCost);

  if (!isUuid(menuItemId) || !['PURCHASE', 'WASTAGE', 'ADJUSTMENT'].includes(type)) {
    return res.status(400).json({ error: 'Invalid inventory transaction.' });
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'Quantity must be a positive whole number.' });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      const item = await tx.menuItem.findUnique({ where: { id: menuItemId } });
      if (!item) throw new Error('Menu item not found.');
      const delta = type === 'PURCHASE' ? quantity : type === 'WASTAGE' ? -quantity : quantity;
      const nextStock = Math.max((item.stockQuantity ?? 0) + delta, 0);

      const [transaction, updatedItem] = await Promise.all([
        tx.inventoryTransaction.create({
          data: {
            menuItemId,
            type,
            quantity: delta,
            note,
            unitCost: unitCost && Number.isFinite(unitCost) ? unitCost : null,
            createdById: req.user.id,
          },
        }),
        tx.menuItem.update({
          where: { id: menuItemId },
          data: {
            trackStock: true,
            stockQuantity: nextStock,
            isAvailable: nextStock > 0,
          },
        }),
      ]);

      return { transaction, updatedItem };
    });

    io.emit('menu:item:updated', result.updatedItem);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to save inventory transaction.' });
  }
});

app.post('/api/admin/restore', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { categories = [], menuItems = [] } = req.body || {};
  if (!Array.isArray(categories) || !Array.isArray(menuItems)) {
    return res.status(400).json({ error: 'Backup file is invalid.' });
  }

  try {
    let categoryCount = 0;
    let itemCount = 0;
    const categoryIdMap = new Map<string, string>();

    await prisma.$transaction(async (tx) => {
      for (const category of categories) {
        if (!category.name || !category.icon) continue;
        const saved = await tx.menuCategory.upsert({
          where: { name: category.name },
          update: {
            icon: category.icon,
            sortOrder: category.sortOrder ?? 0,
            isActive: category.isActive ?? true,
          },
          create: {
            name: category.name,
            icon: category.icon,
            sortOrder: category.sortOrder ?? 0,
            isActive: category.isActive ?? true,
          },
        });
        categoryIdMap.set(category.id, saved.id);
        categoryCount += 1;
      }

      for (const item of menuItems) {
        const categoryId = categoryIdMap.get(item.categoryId) || item.categoryId;
        if (!item.name || !categoryId) continue;
        await tx.menuItem.upsert({
          where: { name_categoryId: { name: item.name, categoryId } },
          update: {
            description: item.description || null,
            price: Number(item.price || 0),
            imageUrl: item.imageUrl || null,
            isVeg: item.isVeg ?? false,
            isAvailable: item.isAvailable ?? true,
            addOns: item.addOns || null,
            targetQueue: item.targetQueue || 'KITCHEN',
            trackStock: item.trackStock ?? false,
            stockQuantity: parseNullableInt(item.stockQuantity),
            lowStockAt: parseNullableInt(item.lowStockAt) ?? 5,
          },
          create: {
            name: item.name,
            description: item.description || null,
            price: Number(item.price || 0),
            imageUrl: item.imageUrl || null,
            isVeg: item.isVeg ?? false,
            isAvailable: item.isAvailable ?? true,
            categoryId,
            addOns: item.addOns || null,
            targetQueue: item.targetQueue || 'KITCHEN',
            trackStock: item.trackStock ?? false,
            stockQuantity: parseNullableInt(item.stockQuantity),
            lowStockAt: parseNullableInt(item.lowStockAt) ?? 5,
          },
        });
        itemCount += 1;
      }
    });

    io.emit('menu:item:updated', { restored: true });
    res.json({ message: 'Catalog restored safely. Orders and customers were not overwritten.', categoryCount, itemCount });
  } catch (error) {
    console.error('Backup restore error:', error);
    res.status(500).json({ error: 'Failed to restore catalog backup.' });
  }
});

// Admin Categories CRUD
app.get('/api/admin/categories', authenticateAdmin, requireRoles('MANAGER', 'STAFF'), async (req, res) => {
  try {
    const categories = await prisma.menuCategory.findMany({
      orderBy: { sortOrder: 'asc' },
    });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load categories.' });
  }
});

app.post('/api/admin/categories', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { name, icon, sortOrder, isActive } = req.body;
  if (!name || !icon) {
    return res.status(400).json({ error: 'Name and icon are required.' });
  }
  try {
    const category = await prisma.menuCategory.create({
      data: { name, icon, sortOrder: sortOrder || 0, isActive: isActive ?? true },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Category creation failed.' });
  }
});

app.put('/api/admin/categories/:id', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { id } = req.params;
  const { name, icon, sortOrder, isActive } = req.body;
  try {
    const category = await prisma.menuCategory.update({
      where: { id },
      data: { name, icon, sortOrder, isActive },
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Category update failed.' });
  }
});

app.delete('/api/admin/categories/:id', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.menuCategory.delete({ where: { id } });
    res.json({ message: 'Category deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Category deletion failed.' });
  }
});

// Admin Menu Items CRUD
app.get('/api/admin/menu-items', authenticateAdmin, requireRoles('MANAGER', 'STAFF', 'KITCHEN', 'BAR', 'BILLING'), async (req, res) => {
  try {
    const items = await prisma.menuItem.findMany({
      include: { category: true },
      orderBy: { name: 'asc' },
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load menu items.' });
  }
});

app.post('/api/admin/menu-items', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const {
    name,
    description,
    price,
    isVeg,
    isAvailable,
    categoryId,
    targetQueue,
    addOns,
    imageUrl,
    trackStock,
    stockQuantity,
    lowStockAt,
  } = req.body;
  if (!name || !price || !categoryId) {
    return res.status(400).json({ error: 'Name, price, and categoryId are required.' });
  }
  try {
    const item = await prisma.menuItem.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        isVeg: isVeg ?? false,
        isAvailable: isAvailable ?? true,
        categoryId,
        targetQueue: targetQueue || 'KITCHEN',
        addOns: addOns || null,
        imageUrl: imageUrl || null,
        trackStock: trackStock ?? false,
        stockQuantity: parseNullableInt(stockQuantity),
        lowStockAt: parseNullableInt(lowStockAt) ?? 5,
      },
    });
    io.emit('menu:item:updated', item);
    res.status(201).json(item);
  } catch (error) {
    console.error('Menu item creation error:', error);
    res.status(500).json({ error: 'Menu item creation failed.' });
  }
});

app.put('/api/admin/menu-items/:id', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    price,
    isVeg,
    isAvailable,
    categoryId,
    targetQueue,
    addOns,
    imageUrl,
    trackStock,
    stockQuantity,
    lowStockAt,
  } = req.body;
  try {
    const item = await prisma.menuItem.update({
      where: { id },
      data: {
        name,
        description,
        price: price ? parseFloat(price) : undefined,
        isVeg,
        isAvailable,
        categoryId,
        targetQueue,
        addOns,
        imageUrl,
        trackStock,
        stockQuantity: parseNullableInt(stockQuantity),
        lowStockAt: parseNullableInt(lowStockAt) ?? undefined,
      },
    });
    io.emit('menu:item:updated', item);
    res.json(item);
  } catch (error) {
    console.error('Menu item update error:', error);
    res.status(500).json({ error: 'Menu item update failed.' });
  }
});

app.delete('/api/admin/menu-items/:id', authenticateAdmin, requireRoles('MANAGER'), async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.menuItem.delete({ where: { id } });
    io.emit('menu:item:deleted', { id });
    res.json({ message: 'Menu item deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Menu item deletion failed.' });
  }
});

// Image Upload Endpoint (Simulated Base64 Storage or local directory saving)
app.post('/api/admin/upload', authenticateAdmin, requireRoles('MANAGER'), (req, res) => {
  const { base64Image } = req.body;
  if (!base64Image) {
    return res.status(400).json({ error: 'No image data sent.' });
  }

  // To run offline local without dependencies, we can return the base64 URL directly,
  // which works seamlessly for rendering and displaying local images offline!
  res.json({ imageUrl: base64Image });
});

// ==========================================
// SOCKET.IO REAL-TIME COMMUNICATION HUB
// ==========================================

io.on('connection', (socket) => {
  console.log(`System connected: ${socket.id}`);

  // Join designated channel rooms
  socket.on('join', (room) => {
    socket.join(room);
    console.log(`Socket ${socket.id} joined room: ${room}`);
  });

  socket.on('disconnect', () => {
    console.log(`System disconnected: ${socket.id}`);
  });
});

// Start the Server
server.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  NIVA DIGITAL POS NETWORK SERVER ONLINE       `);
  console.log(`  Running on http://localhost:${PORT}          `);
  console.log(`  Prisma connected to PostgreSQL               `);
  if (isWeakJwtSecret) {
    console.warn(`  SECURITY: Set a unique JWT_SECRET in backend/.env before client deployment.`);
  }
  console.log(`===============================================`);
});
