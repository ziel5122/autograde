'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthService = require('./AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); /* eslint-env node */


router.use(_bodyParser2.default.json());

router.post('/login', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;

  console.log('username2', username);
  console.log('password2', password);
  _AuthService2.default.login(username, password, function (err, token) {
    console.log(err);
    console.log(token);
    if (err) {
      res.status(401);
    } else {
      res.status(200);
    }
    res.send(token);
  });
});

router.post('/verify', function (req, res) {
  _AuthService2.default.verify(req.body.token, function (valid) {
    res.send(valid);
  });
});

exports.default = router;