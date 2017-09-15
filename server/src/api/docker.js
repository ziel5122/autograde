const dynamodb = require('../aws/dynamo-db');
const express = require('express');
const fs = require('fs-extra');
const jwt = require('jsonwebtoken');
const path = require('path');
const request = require('request-promise');
const options = require('../docker/options');
const utils = require('../utils');

const join = path.join;

const router = express.Router();

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

    dynamodb.update(params, (err, data) => {
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
  const { token, code, hwNum } = body;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      res.sendStatus(400);
    } else {
      const params = {
        Key: {
          username: decoded.username,
        },
        TableName: 'users',
      };

      dynamodb.get(params, (err, { Item : { attempts } }) => {
        if (err) {
          res.sendStatus(500).send('db');
        } else {
          if (attempts <= 0 && decoded.privilege !== 'admin') {
            console.log('not admin or no attempts');
            res.status(400).send('attempts');
          } else {
            utils.prepareTemp(code)
              .then(tempStudentDir => utils.compile(tempStudentDir))
              .then(tempStudentDir => utils.run(tempStudentDir))
              .then(tempStudentDir => utils.evaluate(tempStudentDir))
              .then(({ outputDiff, tempStudentDir }) => {
                return update(decoded.username, attempts || 1)
                  .then((attempts) => {
                    if (attempts) {
                      console.log(attempts - 1);
                    } else {
                      console.log('admin');
                    }

                    console.log(outputDiff.length);
                    console.log(Object.keys(outputDiff[0]).length);

                    if (outputDiff.length === 1 && Object.keys(outputDiff[0]).length === 2) {
                      res.status(200).send('correct');
                    } else {
                      res.status(200).send('incorrect');
                    }

                    return tempStudentDir;
                  })
                  .catch(() => {
                    throw new Error({ func: 'attempts', tempStudentDir });
                  });
              })
              .catch(({ func, tempStudentDir }) => {
                res.status(500).send(func);
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
