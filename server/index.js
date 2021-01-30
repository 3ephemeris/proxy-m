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
app.use('/api/items', createProxyMiddleware({ target: 'http://ec2-52-53-215-61.us-west-1.compute.amazonaws.com:3001', changeOrigin: true }));
//reviews
app.use('/productreviews', createProxyMiddleware({ target: 'http://54.187.133.21:3003', changeOrigin: true }));
//similar-products
app.use('/api/products/:productId', createProxyMiddleware({ target: 'http://3.101.140.254:3002', changeOrigin: true }));
app.use('/api/wishlist/:productId', createProxyMiddleware({ target: 'http://3.101.140.254:3002', changeOrigin: true }));
app.use('/api/wishlist/:productId', createProxyMiddleware({ target: 'http://3.101.140.254:3002', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}...`);
});