const bodyParser = require('body-parser');
const { Server } = require('http');
const { join } = require('path');

const assignments = require('./assignments');
const docker = require('./docker');
const login = require('./login');

const INDEX_PATH = join(__dirname, '../../../public/index.html');

const applyMiddleware = (app) => {
  const httpServer = new Server(app);
  const io = require('socket.io')(httpServer);

  app.use(bodyParser.json());
  app.use('/assignments', assignments(io))
  app.use('/docker', docker);
  app.use('/login', login);

  app.get('*', (req, res) => {
    res.sendFile(INDEX_PATH);
  });

  return httpServer;
};

module.exports = { applyMiddleware };
