'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedisClient = _redis2.default.createClient('redis://h:p62b3ef0574227f4fa802afd6678554ddf58836c317244e7a0174755484312087@ec2-34-206-56-30.compute-1.amazonaws.com:47819');

exports.default = RedisClient;