import { json } from 'body-parser';
import express from 'express';
import { readFileSync } from 'fs-extra';
import https from 'https';
import { join } from 'path';

import docker from './api/docker';
import login from './api/login';

const app = express();

app.use(json());

app.use('/docker', docker);

app.use('/login', login);

app.get('*', (req, res) => {
  res.send('missed it dufus2');
});

const httpsServer = https.createServer({
  key: readFileSync(join(__dirname, '../private.key')),
  cert: readFileSync(join(__dirname, '../certificate.pem')),
}, app)

httpsServer.listen(8892, (err) => {
  if (err) console.error(err);
});
