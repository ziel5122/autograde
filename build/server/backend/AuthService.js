'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _RedisClient = require('./RedisClient');

var _RedisClient2 = _interopRequireDefault(_RedisClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node */
var AuthService = {
  login: function login(username, password, callback) {
    _RedisClient2.default.get(username, function (err, reply) {
      if (reply && password === reply) {
        var token = _jsonwebtoken2.default.sign({ username: username }, 'super secret');
        callback(null, token);
      } else {
        var error = 'username or password incorrect';
        callback(error, null);
      }
    });
  },
  verify: function verify(token, callback) {
    _jsonwebtoken2.default.verify(token, 'super secret', function (err, decoded) {
      if (err) console.error(err);
      callback(!!decoded);
    });
  }
};

exports.default = AuthService;