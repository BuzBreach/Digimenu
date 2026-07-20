const { spawnSync } = require('child_process');

const prismaArgs = process.argv.slice(2);

if (prismaArgs.length === 0) {
  console.error('Usage: node scripts/prisma-run.js <prisma-command-args...>');
  process.exit(1);
}

const env = {
  ...process.env,
  DIRECT_URL: process.env.DIRECT_URL || process.env.DATABASE_URL,
};

const prismaCliPath = require.resolve('prisma/build/index.js');

const result = spawnSync(process.execPath, [prismaCliPath, ...prismaArgs], {
  env,
  stdio: 'inherit',
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
