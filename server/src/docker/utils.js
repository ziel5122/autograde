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

const evaluate = (assignmentId, tempStudentDir, username) => (
  new Promise((resolve, reject) => {
    const promises = [
      readFile(join(tempStudentDir, 'result'), 'utf-8'),
      readFile(join(tempStudentDir, 'output'), 'utf-8'),
    ];
    Promise.all(promises)
      .then(([ result, output ]) => {
        result = result.replace(/\n/g, '');
        output = `${output}${new Date()}`;
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
          .then(() => request(optionsLogs));
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
