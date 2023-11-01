const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handler')
const app = express();
const port = 3000;

app.use(express.json());
const whitelist = ['http://localhost:8080'];
  const options = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin)) {
        callback(null, true)

      }else {
        callback(new Error('No Permitido'))
      }
    }
  };
app.use(cors(options))


routerApi(app);

app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);



app.listen(port, () => {
  // console.log('Mi port' + port)
})
