import express from 'express';
import { useExpressServer } from 'routing-controllers';
import './utils/env';

const app = express();
console.log(`Current NODE_ENV is ${process.env.NODE_ENV}`);

app.get('/', (_, res) => {
  res.send('hello');
});

useExpressServer(app, {
  cors: true,
  controllers: [`${__dirname}/controllers/*.[jt]s`],
  middlewares: [`${__dirname}/middlewares/*.[jt]s`],
});

export function runServer(host: string, port: number) {
  return new Promise((resolve, reject) => {
    app.listen(port, host, (err: any) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
