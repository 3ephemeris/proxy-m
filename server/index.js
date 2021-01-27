const express = require('express');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
const PORT = 3000;

app.use(express.json());

//size-carousel
app.use('/api/items', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
//reviews
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
//similar-products
app.use('/api/products/:productId', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/wishlist/:productId', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/wishlist/:productId', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(PORT);