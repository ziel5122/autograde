require('dotenv').config();

const express = require('express');
const path = require('path');

const docker = require('./api/docker');
const login = require('./api/login');
const middleware = require('./middleware');

const PORT = process.env.PORT || 3000;
const STATIC_PATH = path.join(__dirname, 'static');

const app = express();

app.use(express.static(STATIC_PATH));

middleware.applyMiddleware(app);

app.listen(PORT);
