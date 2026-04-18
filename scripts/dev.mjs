import { spawn } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const run = (args, label) => {
  const child = spawn(npmCommand, args, {
    cwd: process.cwd(),
    stdio: 'pipe',
    shell: process.platform === 'win32',
  });

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`[${label}] ${chunk}`);
  });

  child.stderr.on('data', (chunk) => {
    process.stderr.write(`[${label}] ${chunk}`);
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      process.exitCode = code ?? 1;
    }
  });

  return child;
};

const frontend = run(['run', 'dev', '--workspace', 'frontend'], 'frontend');
const backend = run(['run', 'dev', '--workspace', 'backend'], 'backend');

const shutdown = () => {
  frontend.kill();
  backend.kill();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
