const { spawn, spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");
const net = require("node:net");

const root = path.resolve(__dirname, "..");
const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
const backendDir = path.join(root, "backend");
const frontendDir = path.join(root, "frontend");
const backendEnvPath = path.join(backendDir, ".env");
const defaultPgRoot = process.env.PG_ROOT || "C:\\tmp\\postgresql-17.9";
const defaultPgCtl = path.join(defaultPgRoot, "pgsql", "bin", process.platform === "win32" ? "pg_ctl.exe" : "pg_ctl");
const defaultPgData = path.join(defaultPgRoot, "data");
const pgCtl = process.env.PG_CTL_PATH || defaultPgCtl;
const pgData = process.env.PGDATA || defaultPgData;
const pgPort = Number(process.env.PGPORT || 5432);
const backendPort = Number(process.env.PORT || readEnvValue("PORT") || 5000);
const frontendPort = Number(process.env.FRONTEND_PORT || 3000);

const apps = [
  { name: "backend", color: "\x1b[36m" },
  { name: "frontend", color: "\x1b[35m" },
];

const reset = "\x1b[0m";
const children = [];
let shuttingDown = false;

function readEnvValue(key) {
  if (!fs.existsSync(backendEnvPath)) return undefined;
  const env = fs.readFileSync(backendEnvPath, "utf8");
  const line = env.split(/\r?\n/).find((entry) => entry.trim().startsWith(`${key}=`));
  if (!line) return undefined;
  return line.slice(line.indexOf("=") + 1).trim().replace(/^['\"]|['\"]$/g, "");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function canConnect(port, host = "127.0.0.1", timeoutMs = 1000) {
  return new Promise((resolve) => {
    const socket = net.createConnection({ port, host });
    const done = (ok) => {
      socket.removeAllListeners();
      socket.destroy();
      resolve(ok);
    };

    socket.setTimeout(timeoutMs);
    socket.once("connect", () => done(true));
    socket.once("timeout", () => done(false));
    socket.once("error", () => done(false));
  });
}

async function waitForPort(port, label, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await canConnect(port)) return true;
    await sleep(500);
  }
  throw new Error(`${label} did not start on port ${port}.`);
}

async function requirePortFree(port, label) {
  if (await canConnect(port)) {
    throw new Error(`${label} port ${port} is already in use. Stop the old app window/process first, then run npm run dev again.`);
  }
}

async function ensurePostgres() {
  if (await canConnect(pgPort)) {
    console.log(`PostgreSQL is already listening on port ${pgPort}.`);
    return;
  }

  if (!fs.existsSync(pgCtl) || !fs.existsSync(pgData)) {
    throw new Error(`PostgreSQL is not listening on port ${pgPort}, and pg_ctl was not found at ${pgCtl}. Start PostgreSQL manually, or set PG_CTL_PATH and PGDATA.`);
  }

  const logPath = path.join(backendDir, "postgres-dev.log");
  console.log(`Starting PostgreSQL on port ${pgPort}...`);
  const result = spawnSync(pgCtl, ["-D", pgData, "-l", logPath, "-o", `-p ${pgPort}`, "start"], {
    cwd: backendDir,
    stdio: "inherit",
    windowsHide: true,
  });

  if (result.status !== 0) {
    throw new Error("PostgreSQL failed to start. Check backend/postgres-dev.log for details.");
  }

  await waitForPort(pgPort, "PostgreSQL");
  console.log("PostgreSQL is ready.");
}

function cleanNextDevCache() {
  const cacheDirs = [".next-local", ".next"];

  for (const dir of cacheDirs) {
    const target = path.join(frontendDir, dir);
    if (!fs.existsSync(target)) continue;

    try {
      fs.rmSync(target, { recursive: true, force: true });
      console.log(`Cleared frontend ${dir} cache.`);
    } catch (error) {
      console.warn(`Could not clear frontend ${dir} cache: ${error.message}`);
    }
  }
}

function prefixStream(stream, app, isError = false) {
  const rl = readline.createInterface({ input: stream });
  const output = isError ? process.stderr : process.stdout;

  rl.on("line", (line) => {
    output.write(`${app.color}[${app.name}]${reset} ${line}\n`);
  });
}

function stopAll(exitCode = 0) {
  if (shuttingDown) return;
  shuttingDown = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill("SIGTERM");
    }
  }

  setTimeout(() => process.exit(exitCode), 300);
}

async function start() {
  await ensurePostgres();
  await requirePortFree(backendPort, "Backend");
  await requirePortFree(frontendPort, "Frontend");
  cleanNextDevCache();

  for (const app of apps) {
    const child = spawn(`${npmCmd} run dev`, {
      cwd: path.join(root, app.name),
      env: process.env,
      shell: true,
      stdio: ["inherit", "pipe", "pipe"],
    });

    children.push(child);
    prefixStream(child.stdout, app);
    prefixStream(child.stderr, app, true);

    child.on("exit", (code, signal) => {
      if (!shuttingDown) {
        const reason = signal || `code ${code}`;
        console.error(`${app.color}[${app.name}]${reset} stopped with ${reason}`);
        stopAll(code || 1);
      }
    });
  }

  console.log("Starting backend and frontend. Press Ctrl+C to stop both.");
}

process.on("SIGINT", () => stopAll(0));
process.on("SIGTERM", () => stopAll(0));

start().catch((error) => {
  console.error(`Startup failed: ${error.message}`);
  stopAll(1);
});
