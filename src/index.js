const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

require('dotenv').config();

const middlewares = require('./middlewares');
const fdata = require('./api/fdata');

const app = express();
app.use(morgan('common'));
app.use(cors());

app.use(helmet());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Football Proxy API',
  });
});

app.use('/api/v1', fdata);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1228;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
