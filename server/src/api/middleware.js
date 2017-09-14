const bodyParser = require('body-parser');
const path = require('path');

const docker = require('./docker');
const login = require('./login');

const INDEX_PATH = path.join(__dirname, '../../../public/index.html');

const applyMiddleware = (app) => {
  app.use(bodyParser.json());

  app.use('/docker', docker);

  app.use('/login', login);

  app.get('*', (req, res) => {
    res.sendFile(INDEX_PATH);
  });
};

module.exports = { applyMiddleware };
