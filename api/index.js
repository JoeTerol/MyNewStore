const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, boomErrorHandler, errorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = 3000;

app.use(express.json());
// const whitelist = ['http://localhost:3000', 'https://myapp.com', 'https://my-new-store-jnbwo4xjh-joe-terols-projects.vercel.app/', 'https://www.getpostman.com'];
//   const options = {
//     origin: (origin, callback) => {
//       if (whitelist.includes(origin)) {
//         callback(null, true)

//       }else {
//         callback(new Error('No Permitido'))
//       }
//     }
//   };

const options = {
  origin: '*',
};



app.use(cors(options))


routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);

app.use(errorHandler);



app.listen(port, () => {
  // console.log('Mi port' + port)
})
