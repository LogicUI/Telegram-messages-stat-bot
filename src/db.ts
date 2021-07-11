import mongoose from 'mongoose';
import Logger from 'jet-logger';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../', 'environments', `.${process.env.NODE_ENV}.env`) });
mongoose
  .connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    Logger.Info('Connected to db');
  })
  .catch((error) => {
    Logger.Err(error);
  });
