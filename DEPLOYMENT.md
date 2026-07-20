# Niva Local POS Deployment Guide

## Folder Structure

- `frontend/` - Next.js tablet/customer/admin/KDS/bar/billing/QR interfaces.
- `backend/` - Express API, Socket.IO server, Prisma schema, recommendation engine.
- `backend/prisma/schema.prisma` - PostgreSQL schema for customers, orders, queues, recommendations, menu, and admins.
- `docker-compose.yml` - Local PostgreSQL, backend, and frontend services on one cafe server.

## Local Network Run

1. Start PostgreSQL on the main server.
2. From the repo root, install both apps:

```powershell
npm run install:all
```

3. In `backend`, run the database setup once:

```powershell
npm run db:setup
npm run prisma:seed
```

4. Return to the repo root and start backend and frontend together:

```powershell
npm run dev
```

5. Open customer tablets at `http://SERVER_LOCAL_IP:3000`.
6. Open kitchen at `http://SERVER_LOCAL_IP:3000/kds`.
7. Open bar at `http://SERVER_LOCAL_IP:3000/bar`.
8. Open admin at `http://SERVER_LOCAL_IP:3000/admin`.
9. Open billing at `http://SERVER_LOCAL_IP:3000/billing`.
10. Print table QR sheets from `http://SERVER_LOCAL_IP:3000/qr`.

For same-WiFi client preview, share the Network URL printed by the frontend, for example `http://192.168.x.x:3000`. For clients outside the WiFi network, use a public deployment or a tunnel.

## Docker Run

Run from the repo root:

```powershell
docker compose up --build
```

The services expose:

- Frontend: `http://localhost:3000`
- Backend API and Socket.IO: `http://localhost:5000`
- PostgreSQL: `localhost:5432`

## White-Label / Different Cafe Delivery

Use `TENANT_SETUP.md` when giving this app to a different cafe, bar, or kitchen. Each client should get:

- its own project folder or Docker deployment
- its own PostgreSQL database
- its own `backend/.env`
- its own `frontend/.env.local`
- its own SMS gateway keys
- its own PhonePe merchant keys if online payments are enabled
- its own UPI ID and branding

SMS is one account per cafe/client, not one account per customer. Customers only receive OTP messages on their own phones.
PhonePe is also one merchant account per cafe/client, not one account per customer. Customers pay through their own UPI apps; the cafe's PhonePe merchant account receives the money.

Do not share one database across unrelated cafes unless you are intentionally running a multi-branch chain.

## Admin Login

- Username: `admin`
- Password: `admin123`

## Order Sync

All devices connect to the central backend over LAN/WiFi. New orders are written to PostgreSQL, queue rows are created for kitchen/bar, then Socket.IO broadcasts `order:new`, status-specific order events, and `order:updated` so every screen syncs without page reloads.

## PhonePe Payment Confirmation

To enable automatic online payment confirmation, set `PAYMENT_GATEWAY="phonepe"` and fill the PhonePe credentials in `backend/.env`. The frontend calls `/api/payments/phonepe/create`, redirects the guest to PhonePe checkout, and the backend marks the order paid only after `/api/payments/phonepe/webhook` or `/api/payments/phonepe/status/:merchantOrderId` confirms success.

For production, configure this webhook in the PhonePe merchant dashboard:

```text
https://YOUR_PUBLIC_DOMAIN/api/payments/phonepe/webhook
```

If the cafe server is LAN-only with no public webhook URL, use billing/counter manual confirmation as the offline fallback.

## Cancellation And Refund Rule

Customers can cancel only while the order is still pending and inside the five-minute cancellation window. After five minutes, cancellation closes and refunds are denied by policy.

## Vercel Database Setup (Important)

If you deploy backend on Vercel, configure database variables in the Vercel project settings.

- `DATABASE_URL`: pooled connection string (recommended for runtime requests).
- `DIRECT_URL`: direct connection string (used by Prisma for schema operations).

For Supabase, use:

- `DATABASE_URL` = Supabase pooled URL (PgBouncer, usually port `6543`).
- `DIRECT_URL` = Supabase direct URL (usually port `5432`).

Do not set either value to `localhost`, `127.0.0.1`, or a private LAN IP in Vercel.

After changing DB variables:

1. Redeploy backend service.
2. Run `npm run db:deploy` once against production database (if migrations exist).

## Frontend Backend URL

The frontend now reads the backend origin from `NEXT_PUBLIC_BACKEND_URL`.

- Local dev: set it to `http://127.0.0.1:5000` in `frontend/.env.local`.
- Vercel or ngrok: set it to the public backend URL, for example `https://api.yourdomain.com`.

If this is not set, local browser sessions fall back to `localhost:5000`, and deployed browser sessions fall back to same-origin only if the platform is proxying `/api` and `/socket.io` to the backend.
