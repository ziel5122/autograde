const diff = require('diff');
const fs = require('fs-extra');
const path = require('path');
const request = require('request-promise');
const uuid = require('uuid');

const options = require('./docker/options');

const join = path.join;

const HW_DIR = join(__dirname, '../../code/current');
const TEMP_DIR = join(__dirname, '../../temp');

const compile = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    request(
      options.createOptions(
        ['gcc', '/code/student_src.c', '-o', '/code/student_exe'],
        [`${tempStudentDir}:/code`],
        5
      )
    )
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return request(options.startOptions(Id))
          .then(() => request(options.waitOptions(Id)))
      })
      .then(() => fs.access(join(tempStudentDir, 'student_exe')))
      .then(() => resolve(tempStudentDir))
      .catch((err) => {
        console.log(err, err.stack);
        reject({ func: 'compile', tempStudentDir });
      });
  })
);

const evaluate = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    fs.readFile(join(tempStudentDir, 'output'), 'utf-8')
      .then((output) => {
        fs.readFile(join(tempStudentDir, 'student_output'), 'utf-8')
          .then((student_output) => {
            console.log('output:');
            console.log(output);
            console.log();
            console.log('student_output:');
            console.log(student_output);
            console.log();
            const outputDiff = diff.diffLines(output, student_output);
            console.log(outputDiff);
            console.log();
            resolve({ outputDiff, tempStudentDir });
          })
      })
      .catch((err) => {
        console.log(err, err.stack);
        reject('evaluate', tempStudentDir);
      });
  })
);

const prepareTemp = (code) => (
  new Promise((resolve, reject) => {
    const tempStudentDir = join(TEMP_DIR, uuid.v4());

    fs.copy(HW_DIR, tempStudentDir)
      .then(() => fs.writeFile(join(tempStudentDir, 'student_src.c'), code))
      .then(() => fs.access(join(tempStudentDir, 'student_src.c')))
      .then(() => resolve(tempStudentDir))
      .catch((err) => {
        console.log(err, err.stack);
        reject('prepare', err);
      });
  })
);

const run = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    request(
      options.createOptions(
        ['/code/script.sh'],
        [`${tempStudentDir}:/code`]
      )
    )
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return request(options.startOptions(Id))
          .then(() => request(options.waitOptions(Id)));
      })
      .then(() => resolve(tempStudentDir))
      .catch((err) => {
        console.log(err, err.stack);
        reject('run', tempStudentDir)
      });
  })
);

module.exports = {
  compile,
  evaluate,
  prepareTemp,
  run,
}
