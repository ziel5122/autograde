const bodyParser = require('body-parser');
const { Server } = require('http');
const jwt = require('jsonwebtoken');
const { join } = require('path');
const { createStore } = require('redux');
const request = require('request-promise');

const assignments = require('./assignments');
const docker = require('./docker');
const login = require('./login');
const reducers = require('../redux/reducers');

const INDEX_PATH = join(__dirname, '../../../public/index.html');

const renderFullPage = (preloadedState) => (`
  <!doctype html>
  <style>
    body {
      background: lightgray;
      font-family: roboto, sans-serif;
      height: 100vh;
      margin: 0;
    }

    #root {
      height: 100%;
    }
  </style>
  <meta charset="utf-8" />
  <meta name="author" content="Austin Zielinski">
  <meta name="description" content="automated grading for the Operating Systems course at CSUMB">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>autograde</title>
  <base href="/" />
  <div id="root"></div>
  <script src="vendor.bundle.js"></script>
  <script>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
  <script src="app.bundle.js"></script>
`);

const applyMiddleware = (app) => {
  const httpServer = new Server(app);
  const io = require('socket.io')(httpServer);

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use('/assignments', assignments(io))
  app.use('/docker', docker);
  app.use('/login', login);

  const store = createStore(reducers);

  const token = jwt.sign({}, process.env.JWT_SECRET);

  app.get('*', (req, res) => {
    //res.sendFile(INDEX_PATH);
    request({
      body: JSON.stringify({ token }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
      url: 'http://localhost:3000/assignments/get-assignments',
    })
      .then(response => {
        const responseJson = JSON.parse(response);
        console.log(responseJson);
        return responseJson;
      })
      .then(assignments => {
        store.dispatch({
          assignments,
          type: 'SET_ASSIGNMENTS',
        });
        res.send(renderFullPage(store.getState()));
      })
      .catch(err => console.log(err, err.stack));
  });

  return httpServer;
};

module.exports = { applyMiddleware };
