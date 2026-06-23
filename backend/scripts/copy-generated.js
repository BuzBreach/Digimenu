const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src', 'generated');
const target = path.join(root, 'dist', 'generated');

if (!fs.existsSync(source)) {
  console.error(`Generated Prisma client not found at ${source}. Run npx prisma generate first.`);
  process.exit(1);
}

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(source, target, { recursive: true });
