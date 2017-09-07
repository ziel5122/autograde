import { json } from 'body-parser';
import express from 'express';
import { join } from 'path';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());

app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
