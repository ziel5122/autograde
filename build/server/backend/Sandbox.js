'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _child_process = require('child_process');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _AuthService = require('./AuthService');

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempPath = _path2.default.resolve(__dirname, '../../temp'); /* esline-env node */


var previous = 'notactuallyafile';

var runSandbox = function runSandbox(language, code, callback) {
  (0, _child_process.exec)('rm ' + tempPath + '/' + previous + '*');
  var name = (0, _uuid2.default)();
  var filePath = _path2.default.resolve(__dirname, '../../temp/' + name + '.c');
  var outPath = _path2.default.resolve(__dirname, '../../temp/' + name);
  _fs2.default.writeFile(filePath, code, function (err) {
    if (err) console.error(err);
    (0, _child_process.exec)('gcc ' + filePath + ' -o ' + outPath, function (error, stdout, stderr) {
      (0, _child_process.exec)(outPath, function (error, stdout, stderr) {
        previous = name;
        callback('' + stdout);
      });
    });
  });
};

var router = _express2.default.Router();

router.use(_bodyParser2.default.json());

router.post('/code', function (req, res) {
  var language = req.body.language;
  var code = req.body.code;

  console.log(req.body);
  console.log(code);

  runSandbox(language, code, function (output) {
    res.send(output);
  });
});

exports.default = router;