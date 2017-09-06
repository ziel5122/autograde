import { json } from 'body-parser';
import express from 'express';
import { join } from 'path';

import api from './api/login';

var PORT = process.env.PORT || 3000;

var app = express();

app.use(json());

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
