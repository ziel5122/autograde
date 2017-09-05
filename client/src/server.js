import express from 'express';
import { join } from 'path';

import api from './api/redis';

var PORT = process.env.PORT || 3000;

var app = express();

app.use('./api', api);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
