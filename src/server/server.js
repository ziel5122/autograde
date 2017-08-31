import { json } from 'body-parser';
import express from 'express';

import docker from './api/docker';

const app = express();

app.use(json());

app.use('/docker', docker);

app.get('*', (req, res) => {
  res.send('missed it dufus2');
});

app.listen(8892);
