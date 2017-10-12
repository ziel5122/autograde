const { access } = require('fs-extra');

const { createOptions, startOptions, waitOptions } = require('./options');

const PROJECT_DIR = join(__dirname, '../../../');
const CODE_DIR = join(PROJECT_DIR, 'code');
const TEMP_DIR = join(PROJECT_DIR, 'temp');

const compile = (tempStudentDir) => (
  new Promise((resolve, reject) => {
    const optionsCreate = createOptions(
      ['./compile.sh'],
      [`${tempStudentDir}:/code`],
      5,
    );

    request(options)
      .then((body) => {
        const bodyJson = JSON.parse(body);
        console.log(bodyJson);
        const { Id, Warnings } = bodyJson;
        if (Warnings) console.log(Warnings);
        const optionsStart = startOptions(Id);
        return request(optionsStart);
      })
      .then(() => {
        const optionsWait = waitOptions(Id);
        return request(optionsWait);
      })
      .then(() => {
        const optionsLogs = logsOptions(Id);
        return reques(optionsLogs);
      })
      .then(logs => console.log(logs))
      .then(() => access(join(tempStudentDir, 'student_exe')))
      .then(() => resolve(tempStudentDir))
      .catch((err) => reject(err));
  });
)
