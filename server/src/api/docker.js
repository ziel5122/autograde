const express = require('express');
const fs = require('fs-extra');
const jwt = require('jsonwebtoken');
const path = require('path');
const request = require('request-promise');
const options = require('../docker/options');
const utils = require('../utils');

const join = path.join;

const router = express.Router();

router.post('/run', ({ body }, res) => {
  const { token, code, hwNum } = body;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      utils.prepareTemp(code)
        .then(tempStudentDir => utils.compile(tempStudentDir))
        .then(tempStudentDir => utils.run(tempStudentDir))
        .then(tempStudentDir => utils.evaluate(tempStudentDir))
        .catch((err, tempStudentDir) => {
          console.error(err);
          res.sendStatus(500);
          console.log(tempStudentDir)
          return tempStudentDir;
        })
        .then((tempStudentDir) => {
          console.log('finally executed');
          request(options.pruneOptions);
          fs.remove(tempStudentDir);
        });
    }
  });
});

module.exports = router;
