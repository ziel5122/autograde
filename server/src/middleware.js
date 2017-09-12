const bodyParser = require('body-parser');
const path = require('path');

const docker = require('./api/docker');
const login = require('./api/login');

const INDEX_PATH = path.join(__dirname, '../../')
