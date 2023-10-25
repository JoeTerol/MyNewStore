const productRouter = require('./products.router.js');
const userRouter = require('./users.router.js');
const categoryRouter = require('./categories.router.js');
const orderRouter = require('./orders.router.js')

function routerApi(app) {
  app.use('/products', productRouter);
  app.use('/users', userRouter);
  app.use('/categories', categoryRouter);
  app.use('./orders', orderRouter);




}

module.exports = routerApi;
