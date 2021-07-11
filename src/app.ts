import express, { Application, ErrorRequestHandler } from 'express';
import Logger from 'jet-logger';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import './db';
import path from 'path';

dotenv.config({
  path: path.join(
    __dirname,
    '../',
    'environments',
    `.${process.env.NODE_ENV}.env`,
  ),
});

const PORT = process.env.PORT || 3001;
const app: Application = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('App is working');
});

app.listen(PORT, () => Logger.Info(`Server is listening on port ${PORT}`));

const errorRequestHandler: ErrorRequestHandler = (error, req, res) => {
  Logger.Err({ status: error.status, message: error.message });
  res.send({ status: error.status, message: error.message });
};

app.use(errorRequestHandler);
