const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

//http://127.0.0.1:3000/api/v1/book-categories => http://127.0.0.1:3001/
app.use(
  '/api/v1/book-categories',
  createProxyMiddleware({
    target: 'http://127.0.0.1:3001',
    changeOrigin: true,
    pathRewrite: {
      '^/book-categories': '',
    },
  }),
);

//http://127.0.0.1:3000/api/v1/inventory => http://127.0.0.1:3002/
app.use(
  '/api/v1/inventory',
  createProxyMiddleware({
    target: 'http://127.0.0.1:3002',
    changeOrigin: true,
    pathRewrite: {
      '^/inventory': '',
    },
  }),
);

app.get('/', (_, res) => {
  res.json({ success: 'welcome to the Library API Gateway' });
});

app.listen(3000, () => {
  console.log(`listening on http://127.0.0.1:3000`);
});