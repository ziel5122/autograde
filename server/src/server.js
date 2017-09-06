import { json } from 'body-parser';
import express from 'express';

import docker from './api/docker';
import login from './api/login';

const app = express();

app.use(json());

app.use('/docker', docker);

app.use('/login', login);

app.get('*', (req, res) => {
  res.send('missed it dufus2');
});

app.listen(8892, (err) => {
  if (err) console.error(err);
});
