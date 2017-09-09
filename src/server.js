const join = require('path').join;
const json = require('body-parser').json;
const express = require('express');
const static = express.static;

const server = require('./app').server;

const PORT = process.env.PORT || 3000;
const STATIC_PATH = join(__dirname, '../static');

const app = server();

app.use(json());

app.use('/docker', docker);

app.use('/login', login);

app.use(static(STATIC_PATH));

app.listen(PORT);
