const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
    '/book-list',
    createProxyMiddleware({
      target: 'http://127.0.0.1:3002',
      changeOrigin: true,
      pathRewrite: {
        '^/book-list': '',
      },
    }),
  );

app.get('/', (req, res) => {
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log(`listening on localhost:${PORT}`);
});