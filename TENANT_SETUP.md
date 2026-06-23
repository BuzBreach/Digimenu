# Giving This POS To Different Cafes, Bars, And Kitchens

Each shop should receive its own separate deployment, database, admin login, SMS credentials, and branding.

## OTP / SMS Account Rule

You do not create a Twilio/Fast2SMS account for every customer. Use one SMS gateway account per cafe/client deployment.

- Customer: only enters their phone number and receives OTP.
- Cafe/client: owns one SMS provider account and pays for OTP messages.
- App: reads that cafe's SMS keys from `backend/.env` and sends OTPs through that one account.

For India, Fast2SMS is usually simpler and cheaper than Twilio. Twilio also works, but the cafe needs one Twilio account, one sender number, and valid credentials.

## PhonePe Payment Account Rule

You do not create a PhonePe merchant account for every customer. Use one PhonePe merchant/payment gateway account per cafe/client deployment.

- Customer: pays with PhonePe, Google Pay, UPI, card, or counter option.
- Cafe/client: owns one PhonePe merchant account and receives settlements.
- App: reads that cafe's PhonePe keys from `backend/.env`, creates checkout orders, and waits for PhonePe webhook/status confirmation before marking an order paid.

After PhonePe onboarding and KYC, fill these values:

```env
PAYMENT_GATEWAY="phonepe"
PHONEPE_ENV="sandbox"
PHONEPE_CLIENT_ID="from_phonepe_dashboard"
PHONEPE_CLIENT_SECRET="from_phonepe_dashboard"
PHONEPE_CLIENT_VERSION="1"
PHONEPE_MERCHANT_ID="from_phonepe_dashboard"
PHONEPE_WEBHOOK_USERNAME="your_webhook_username"
PHONEPE_WEBHOOK_PASSWORD="your_webhook_password"
```

Set the PhonePe dashboard webhook URL to:

```text
https://your-public-url.com/api/payments/phonepe/webhook
```

PhonePe cannot call a private `localhost` webhook from the internet. For testing, use a tunnel/public URL. For offline-only LAN mode, keep the manual billing/counter confirmation as the fallback.

## Recommended Delivery Model

1. Copy this project folder for the client.
2. Rename the folder, for example `niva-pos-client-blue-mug`.
3. Create a separate PostgreSQL database for that client.
4. Copy `backend/.env.example` to `backend/.env`.
5. Copy `frontend/.env.local.example` to `frontend/.env.local`.
6. Fill the client brand, SMS provider, UPI ID, and database URL.
7. Run database setup and seed.
8. Start the backend and frontend on the client server.

## Client-Specific Files

Backend:

```env
CAFE_NAME="Blue Mug Cafe"
CAFE_LEGAL_NAME="Blue Mug Cafe Pvt Ltd"
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bluemug_pos?schema=public"
JWT_SECRET="use-a-new-secret-for-this-client"
SMS_PROVIDER="fast2sms"
FAST2SMS_API_KEY="client_fast2sms_key"
PAYMENT_GATEWAY="phonepe"
PHONEPE_CLIENT_ID="client_phonepe_client_id"
PHONEPE_CLIENT_SECRET="client_phonepe_client_secret"
PHONEPE_MERCHANT_ID="client_phonepe_merchant_id"
```

Frontend:

```env
NEXT_PUBLIC_CAFE_NAME="Blue Mug Cafe"
NEXT_PUBLIC_CAFE_SHORT_NAME="Blue Mug"
NEXT_PUBLIC_CAFE_LEGAL_NAME="Blue Mug Cafe Pvt Ltd"
NEXT_PUBLIC_CAFE_CATEGORY="Cafe, Bar & Kitchen"
NEXT_PUBLIC_UPI_ID="bluemug@upi"
```

## Commands For Each Client

```powershell
.\setup-client.ps1 -CafeName "Blue Mug Cafe" -CafeLegalName "Blue Mug Cafe Pvt Ltd"
```

Or run the setup manually:

```powershell
npm run install:all
cd backend
npx prisma db push
npm run prisma:seed
```

```powershell
cd ..
npm run dev
```

## LAN Access

Find the local IP of the main server and give the shop these links:

- Manager/Admin: `http://SERVER_IP:3000/admin`
- Customer table URL: `http://SERVER_IP:3000/?table=1`
- QR generator: `http://SERVER_IP:3000/qr`
- Kitchen full screen: `http://SERVER_IP:3000/kds`
- Bar full screen: `http://SERVER_IP:3000/bar`
- Billing: `http://SERVER_IP:3000/billing`

## Important

Do not share one database between different cafes unless you intentionally want a multi-branch shared system. For individual clients, use one deployment and one database per shop.
