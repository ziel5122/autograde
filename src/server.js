require('dotenv').config();

const join = require('path').join;
const json = require('body-parser').json;
const express = require('express');

const docker = require('./api/docker');
const login = require('./api/login');

const INDEX_PATH = join(__dirname, 'index.html');
const PORT = process.env.PORT || 3000;
const STATIC_PATH = join(__dirname, 'static');

const app = express();

app.use(json());

app.use('/docker', docker);

app.use('/login', login);

app.use(express.static(STATIC_PATH));

app.get('*', (req, res) => {
  res.sendFile(INDEX_PATH)
});

app.listen(PORT);
