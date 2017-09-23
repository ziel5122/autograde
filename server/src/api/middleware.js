const bodyParser = require('body-parser');
const { createServer } = require('http');
const { join } = require('path');
const socket = require('socket.io');

const assignments = require('./assignments');
const docker = require('./docker');
const login = require('./login');

const INDEX_PATH = join(__dirname, '../../../public/index.html');

const applyMiddleware = (app) => {
  const server = createServer(app);
  const io = socket(server);

  app.use(bodyParser.json());
  app.use('/assignments', assignments(io))
  app.use('/docker', docker);
  app.use('/login', login);

  app.get('*', (req, res) => {
    res.sendFile(INDEX_PATH);
  });

  return server;
};

module.exports = { applyMiddleware };
