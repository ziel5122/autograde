const { access, copy, writeFile } = require('fs-extra');
const { join } = require('path');
const { v4 } = require('uuid');

const PROJECT_DIR = join(__dirname, '../../../');
const CODE_DIR = join(PROJECT_DIR, 'code');
const TEMP_DIR = join(PROJECT_DIR, 'temp');

const prepareTemp = (assignmentId, codeMap, partId) => (
  new Promise((resolve, reject) => {
    const tempStudentDir = join(TEMP_DIR, v4());
    const assignmentPartDir = join(CODE_DIR, `${assignmentId}/${partId}`);

    copy(assignmentPartDir, tempStudentDir)
      .then(() => {
        const fileWrites = Object.keys(codeMap).map(filename => (
          writeFile(join(tempStudentDir, filename), codeMap[filename])
        ));
        return Promise.all(fileWrites);
      })
      .then(() => resolve(tempStudentDir))
      .catch((err) => reject(err));
  })
);

module.exports = {
  prepareTemp,
};
