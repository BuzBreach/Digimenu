param(
  [string]$CafeName = "Niva Cafe",
  [string]$CafeLegalName = "Niva Cafe, Bar & Kitchen",
  [string]$DatabaseUrl = "postgresql://postgres:postgres@localhost:5432/kathadb?schema=public",
  [string]$JwtSecret = ""
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$BackendEnv = Join-Path $Root "backend\.env"
$FrontendEnv = Join-Path $Root "frontend\.env.local"

if (-not $JwtSecret) {
  $JwtSecret = [Convert]::ToBase64String([Guid]::NewGuid().ToByteArray()) + [Guid]::NewGuid().ToString("N")
}

Write-Host "Setting up local POS for $CafeName..."

@"
DATABASE_URL="$DatabaseUrl"
PORT=5000
JWT_SECRET="$JwtSecret"
CAFE_NAME="$CafeName"
CAFE_LEGAL_NAME="$CafeLegalName"
CUSTOMER_OTP_ENABLED="false"
PAYMENT_GATEWAY=
PHONEPE_ENV="sandbox"
PHONEPE_CLIENT_ID=
PHONEPE_CLIENT_SECRET=
PHONEPE_CLIENT_VERSION="1"
PHONEPE_MERCHANT_ID=
PHONEPE_BASE_URL=
PHONEPE_AUTH_URL=
PHONEPE_REDIRECT_URL=
PHONEPE_WEBHOOK_USERNAME=
PHONEPE_WEBHOOK_PASSWORD=
SMS_PROVIDER=
SMS_DEFAULT_COUNTRY_CODE="+91"
FAST2SMS_API_KEY=
FAST2SMS_SENDER_ID=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_FROM_NUMBER=
"@ | Set-Content -LiteralPath $BackendEnv -Encoding UTF8

@"
NEXT_PUBLIC_CAFE_NAME=$CafeName
NEXT_PUBLIC_CAFE_LEGAL_NAME=$CafeLegalName
NEXT_PUBLIC_API_URL=http://localhost:5000
"@ | Set-Content -LiteralPath $FrontendEnv -Encoding UTF8

Push-Location (Join-Path $Root "backend")
npm install
npx prisma generate
npx prisma db push
npm run build
Pop-Location

Push-Location (Join-Path $Root "frontend")
npm install
npm run build
Pop-Location

Write-Host ""
Write-Host "Setup complete."
Write-Host "Start app:      npm run dev"
Write-Host "Frontend URL:   http://localhost:3000"
Write-Host "Backend API:    http://localhost:5000"
Write-Host "Manager URL:    http://localhost:3000/admin"
Write-Host "LAN preview:    share http://SERVER_LOCAL_IP:3000 with devices on the same WiFi"
