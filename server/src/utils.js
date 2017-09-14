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
        ['./code/script.sh'],
        [`${tempStudentDir}:/code`],
        100
      )
    )
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return Id;
      })
      .then((Id) => {
        request(options.startOptions(Id))
          .then(() => request(options.waitOptions(Id)))
          .then(() => {
            return fs.access(join(tempStudentDir, 'student_exe'));
          })
          .then(() => resolve(tempStudentDir))
          .catch(err => {
            console.log('needed');
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err, err.stack);
        reject('compile', tempStudentDir);
      });
  })
);

const evaluate = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    fs.readFile(join(tempStudentDir, 'output'), 'utf-8')
      .then((output) => {
        fs.readFile(join(tempStudentDir, 'student_output'), 'utf-8')
          .then((student_output) => {
            console.log(output);
            console.log(student_output);
            const outputDiff = diff.diffLines(output, student_output);
            console.log(outputDiff);
            resolve(tempStudentDir);
          })
      })
      .catch((err) => {
        console.log(err, err.stack);
        reject('evaluate');
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
        reject(err);
      });
  })
);

const run = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    request(
      options.createOptions(
        ['./code/run.sh'],
        [`${tempStudentDir}:/code`]
      )
    )
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return Id;
      })
      .then((Id) => {
        request(options.startOptions(Id))
          .then(() => request(options.waitOptions(Id)))
          .then(() => resolve(tempStudentDir));
      })
      .catch(err => reject('run'));
  })
);

module.exports = {
  compile,
  prepareTemp,
  run,
}
