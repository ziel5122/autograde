const diff = require('diff');
const fsExtra = require('fs-extra');
const join = require('path').join;
const request = require('request-promise');
const Router = require('express').Router;
const v4 = require('uuid').v4;
const verify = require('jsonwebtoken').verify;

const diffChars = diff.diffChars;
const diffLines = diff.diffLines;

const copySync = fsExtra.copySync;
const readFileSync = fsExtra.readFileSync;
const removeSync = fsExtra.removeSync;
const writeFileSync = fsExtra.writeFileSync;

const headers = {
  'content-type': 'application/json',
  host: '127.0.0.1',
};

const urlBase = 'http://unix:/var/run/docker.sock:/v1.30';

const createOptions = (tempCodePath) => ({
  headers,
  body: JSON.stringify({
    cmd: ['./code/script.sh'],
    hostConfig: {
      binds: [`${tempCodePath}:/code`],
    },
    image: 'autograde',
    stopTimeout: 5,    //seconds
  }),
  method: 'post',
  tty: true,
  url: `${urlBase}/containers/create`,
});

const deleteOptions = (id) => ({
  headers,
  method: 'delete',
  url: `${urlBase}/containers/${id}`,
});

const logsOptions = (id) => ({
  headers,
  url: `${urlBase}/containers/${id}/logs?stdout=1&stderr=1`,
  method: 'get',
});

const pruneOptions = {
  headers,
  method: 'post',
  url: `${urlBase}/containers/prune`,
}

const startOptions = (id) => ({
  headers,
  url: `${urlBase}/containers/${id}/start`,
  method: 'post',
});

const waitOptions = (id) => ({
  headers,
  method: 'post',
  url: `${urlBase}/containers/${id}/wait`,
});

const runCode = (tempPath) => (
  new Promise((resolve, reject) => {
    request(createOptions(tempPath))
      .then((body) => {
        const { Id, Warnings } = JSON.parse(body);
        if (Warnings) console.log(Warnings);
        return Id;
      })
      .then((Id) => {
        request(startOptions(Id))
          .then(() => request(waitOptions(Id)))
          .then(() => resolve());
      })
      .catch(err => reject(err));
  })
);

const router = Router();

router.get('/docker', (req, res) => {
  res.status(200).send('docker get test successful');
});

router.post('/run', ({ body }, res) => {
  const { jwt, code, hwNum } = body;
  console.log('here');

  verify(jwt, 'kitty', (err, decoded) => {
    if (err) {
      console.error(err);
      res.status(400).send('not authorized');
    }

    const hwCodePath = join(codePath, `hw${hwNum}`);
    const tempCodePath = join(__dirname, `../temp/${v4()}`);

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
        const result = diff.length === 1 && diff[0].added === undefined &&
          diff[0].removed === undefined ?
            'correct' : 'incorrect';
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
      .then(() => {
        request(pruneOptions);
        removeSync(tempCodePath);
      });
  });
});

module.exports = router;
