const diff = require('diff');
const fsExtra = require('fs-extra');
const join = require('path').join;
const request = require('request-promise');
const Router = require('express').Router;
const v4 = require('uuid').v4;
const verify = require('jsonwebtoken').verify;

const options = require('../docker/options');
const runCode = require('../docker/utils');

const diffChars = diff.diffChars;
const diffLines = diff.diffLines;

const copySync = fsExtra.copySync;
const readFileSync = fsExtra.readFileSync;
const removeSync = fsExtra.removeSync;
const writeFileSync = fsExtra.writeFileSync;

const CODE_PATH = join(__dirname, '../../code');

const router = Router();

router.get('/docker', (req, res) => {
  res.status(200).send('docker get test successful');
});

router.post('/run', ({ body }, res) => {
  const { jwt, code, hwNum } = body;

  verify(jwt, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error(err);
      res.status(400).send('not authorized');
    }

    const hwCodePath = join(CODE_PATH, `hw${hwNum}`);
    const tempCodePath = join(__dirname, `../../temp/${v4()}`);

    copySync(hwCodePath, tempCodePath);
    writeFileSync(join(tempCodePath, 'student_src.c'), code);

    runCode(tempCodePath)
      .then(() => {
        const output = readFileSync(join(tempCodePath, 'output'), 'utf-8');
        const student_output = readFileSync(
          join(tempCodePath, 'student_output'),
          'utf-8'
        );
        const diff = diffLines(output, student_output);
        console.log(diff);
        const result = diff.length === 1 && diff[0].added === undefined &&
          diff[0].removed === undefined ?
            'correct' : 'incorrect';
        request(options.pruneOptions);
        removeSync(tempCodePath);
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
        request(options.pruneOptions);
        removeSync(tempCodePath);
        res.status(500).send(err);
      });
  });
});

module.exports = router;
