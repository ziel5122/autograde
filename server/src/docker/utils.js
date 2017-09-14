const path = require('path');
const request = require('request-promise');
const uuid = require('uuid');

const options = require('./options');

const join = path.join;

const HW_DIR = join(__dirname, '../../../code/current');
const TEMP_DIR = join(__dirname, '../../../temp');

const prepareDir = (code) => (
  new Promise((resolve, reject) => {
    try {

    } catch (err) {
      reject(err);
    }
    const tempUserDir = join(TEMP_DIR, uuid.v4());
    copySync(HW_DIR, tempUserDir);
    writeFileSync(join(tempUserDir, 'student_src.c'), code);
  })
);

const runCode = (tempPath) => (
  new Promise((resolve, reject) => {
    request(options.createOptions(tempPath))
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return Id;
      })
      .then((Id) => {
        request(options.startOptions(Id))
          .then(() => request(options.waitOptions(Id)))
          .then(() => resolve());
      })
      .catch(err => reject(err));
  })
);

module.exports = runCode;
