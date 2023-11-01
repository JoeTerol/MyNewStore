const express = require('express');
const productRouter = require('./products.router');
const userRouter = require('./users.router');
const categoryRouter = require('./categories.router');
const orderRouter = require('./orders.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
  router.use('/orders', orderRouter);




}

module.exports = routerApi;
