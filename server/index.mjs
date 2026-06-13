import express from 'express';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cases, atlasNodes } from '../src/data/siteData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const app = express();
const port = Number(process.env.PORT || 5173);
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'creative-enterprise-lab' });
});

app.get('/api/cases', (_req, res) => {
  res.json(cases);
});

app.get('/api/cases/:slug', (req, res) => {
  const study = cases.find((item) => item.slug === req.params.slug);
  if (!study) {
    res.status(404).json({ error: 'Case study not found' });
    return;
  }
  res.json(study);
});

app.get('/api/atlas', (_req, res) => {
  res.json(atlasNodes);
});

if (isProduction) {
  const dist = resolve(root, 'dist');
  app.use(express.static(dist));
  app.get('*', (_req, res) => {
    const entry = resolve(dist, 'index.html');
    if (!existsSync(entry)) {
      res.status(500).send('Build missing. Run npm run build first.');
      return;
    }
    res.sendFile(entry);
  });
} else {
  const { createServer } = await import('vite');
  const react = (await import('@vitejs/plugin-react')).default;
  const vite = await createServer({
    configFile: false,
    root,
    plugins: [react()],
    server: {
      host: '127.0.0.1',
      port,
      middlewareMode: true
    },
    appType: 'spa'
  });
  app.use(vite.middlewares);
}

app.listen(port, '127.0.0.1', () => {
  console.log(`Sudharshan lab running at http://127.0.0.1:${port}`);
});
