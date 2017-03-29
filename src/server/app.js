import { json } from 'body-parser';
import express from 'express';
import ExpressBrute, { MemoryStore } from 'express-brute';
// import fs from 'fs';
import path from 'path';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
app.use(json());

const bruteforce = new ExpressBrute(new MemoryStore());

app.post('/grade', bruteforce.prevent, (req, res) => {
  res.send('Success!');
});

app.listen(port);
