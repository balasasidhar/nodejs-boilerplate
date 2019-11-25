import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import Logger from './utils/logger';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendStatus(200));

app.listen(3000, err => {
  if (err) {
    Logger.error(err);
  } else {
    Logger.log('Server started listening on port 3000');
  }
});
