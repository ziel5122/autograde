const { readFile } = require('fs-extra');
const { join } = require('path');
const request = require('request-promise');

const {
  createOptions,
  logsOptions,
  startOptions,
  waitOptions
} = require('./options');
const { docClient } = require('../aws');

const PROJECT_DIR = join(__dirname, '../../../');
const CODE_DIR = join(PROJECT_DIR, 'code');
const TEMP_DIR = join(PROJECT_DIR, 'temp');

const evaluate = (attempts, partId, tempStudentDir, username) => (
  new Promise((resolve, reject) => {
    const promises = [
      readFile(join(tempStudentDir, 'result'), 'utf-8'),
      readFile(join(tempStudentDir, 'output'), 'utf-8'),
    ];
    Promise.all(promises)
      .then(([ result, output ]) => {
        result = result.replace(/\n/g, '');
        const date = new Date().toString();
        const newAttempts = attempts - 1;

        const params = {
          TableName: 'users-parts',
          Key: {
            username,
            partId,
          },
          UpdateExpression: 'set #a = :a, #anum = :rod',
          ExpressionAttributeNames: {
            '#a': 'attempts',
            '#anum': `attempt${attempts}`,
          },
          ExpressionAttributeValues: {
            ':a': newAttempts,
            ':rod': {
              date,
              result: result,
              output: output || 'error',
            },
          },
        };

        docClient.update(params).promise()
          .then(data => {
            resolve({ newAttempts, result });
          })
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  })
);

const run = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    const optionsCreate = createOptions(
      ['./script.sh'],
      [`${tempStudentDir}:/code`],
    );
    request(optionsCreate)
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        const optionsStart = startOptions(Id);
        const optionsWait = waitOptions(Id);
        const optionsLogs = logsOptions(Id);
        return request(optionsStart)
          .then(() => request(optionsWait))
          .then(() => request(optionsLogs))
          .catch(err => reject(err));
      })
      .then(logs => console.log(logs))
      .then(() => resolve(tempStudentDir))
      .catch(err => reject(err));
  })
);

const updateDb = (assignmentId, result, username) => (
  new Promise((resolve, reject) => {

  })
);

module.exports = {
  evaluate,
  run,
};
