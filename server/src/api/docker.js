const express = require('express');
const fs = require('fs-extra');
const jwt = require('jsonwebtoken');
const path = require('path');
const request = require('request-promise');
const options = require('../docker/options');
const utils = require('../utils');

const docClient = require('../aws');

const join = path.join;

const router = express.Router();

const getUser = (username) => ({
  Key: {
    username,
  },
  TableName: 'users',
});

const update = (username, attempts) => (
  new Promise((resolve, reject) => {
    const params = {
      TableName: 'users',
      Key: {
        username,
      },
      UpdateExpression: 'set attempts = :a',
      ExpressionAttributeValues: {
        ':a': attempts - 1,
      },
    };

    docClient.update(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
        reject();
      } else {
        resolve(attempts - 1);
      }
    });
  })
);

router.post('/run', ({ body }, res) => {
  const { token, code } = body;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err, err.stack);
      res.status(400).json({
        feedback: 'jwt invalid',
        attemtps: 0,
      });
    } else {
      const params = getUser(decoded.username);
      docClient.get(params, (err, { Item : { attempts } }) => {
        if (err) {
          res.sendStatus(500).send('db');
        } else {
          if (attempts <= 0 && decoded.privilege !== 'admin') {
            console.log('not admin or no attempts');
            res.status(400).json({
              feedback: 'no attempts remaining',
              attempts,
            });
          } else {
            utils.prepareTemp(code)
              .then(tempStudentDir => utils.compile(tempStudentDir))
              .then(tempStudentDir => utils.run(tempStudentDir))
              .then(tempStudentDir => utils.evaluate(tempStudentDir, attempts, decoded.username))
              .then(({ outputDiff, tempStudentDir }) => {
                return update(decoded.username, attempts || 1)
                  .then((attempts) => {
                    const feedback = outputDiff.length === 1 &&
                      Object.keys(outputDiff[0]).length === 2 ?
                        'correct' :
                        'incorrect';

                    if (feedback === 'correct') {
                      const params = {
                        TableName: 'users',
                        Key: {
                          username: decoded.username,
                        },
                        UpdateExpression: 'set #c = :correct',
                        ExpressionAttributeNames: { '#c': 'correct' },
                        ExpressionAttributeValues: {
                          ':correct': true,
                        },
                      };

                      docClient.update(params, (err, data) => {
                        if (err) throw new Error(err);
                      });
                    }

                    res.status(200).json({ feedback, attempts });

                    return tempStudentDir;
                  });
              })
              .catch(({ func, tempStudentDir }) => {
                let feedback;
                switch (func) {
                  case 'compile':
                    feedback = 'Error compiling your code.'; break;

                  case 'evaluate':

                  case 'prepare':

                  case 'run':
                    feeback = 'Server error, attempt not counted'; break;

                  default:
                    feeback = `Woops, this wasn't suppsoed to happen`;
                }
                res.status(500).json({ feedback, attempts });
                return tempStudentDir;
              })
              .then((tempStudentDir) => {
                request(options.pruneOptions);
                return fs.remove(tempStudentDir);
              })
              .catch(err => console.log(err, err.stack));
          }
        }
      });
    }
  });
});

module.exports = router;
