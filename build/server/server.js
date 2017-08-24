'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _accountsEp = require('./backend/accounts-ep');

var _accountsEp2 = _interopRequireDefault(_accountsEp);

var _Sandbox = require('./backend/Sandbox');

var _Sandbox2 = _interopRequireDefault(_Sandbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
// ejs templates
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, '..', 'static'));

// define the folder that will be used for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'static')));

app.use('/api', _accountsEp2.default);
app.use('/run', _Sandbox2.default);

// universal routing and rendering
app.get('*', function (req, res) {
  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  var markup = '';
  var status = 200;

  if (process.env.UNIVERSAL) {
    var context = {};
    /*
    markup = renderToString(
      <Router context={context} location={req.url}>
        <Main />
      </Router>
    );
    */
    if (context.is404) status = 404;
  }

  return res.status(status).render('index', { markup: markup });
});

// start the server
var env = process.env.NODE_ENV || 'production';
var port = process.env.PORT || 3000;
app.listen(port, function (err) {
  if (err) return console.error(err);

  return console.info('\n      Server running on http://localhost:' + port + ' [' + env + ']\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\n    ');
});