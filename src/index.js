import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import moment from 'moment';

import Logger from './utils/logger';
import APIRoutes from './routes';

fs.mkdirSync('logs', { recursive: true });

const accessLogStream = fs.createWriteStream(
  path.join(
    __dirname,
    '../logs',
    `${moment()
      .utcOffset('+05:30')
      .format('YYYY-MMM-DD')}.log`,
  ),
  {
    flags: 'a',
  },
);

morgan.token('body', (req) => JSON.stringify(req.body));

const app = express();

app.use(morgan('dev', { stream: accessLogStream }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', APIRoutes);

app.use('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Not Found',
  });
});

app.listen(3000, (err) => {
  if (err) {
    Logger.error(err);
  } else {
    Logger.log('Server started listening on port 3000');
  }
});
