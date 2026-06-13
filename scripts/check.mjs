import { build } from 'vite';
import react from '@vitejs/plugin-react';

await build({
  configFile: false,
  root: process.cwd(),
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});

const { spawnSync } = await import('node:child_process');

const serverCheck = spawnSync(process.execPath, ['--check', 'server/index.mjs'], {
  stdio: 'inherit',
  shell: false
});

if (serverCheck.error) {
  console.error(serverCheck.error.message);
  process.exit(1);
}

if (serverCheck.status !== 0) {
  process.exit(serverCheck.status ?? 1);
}
