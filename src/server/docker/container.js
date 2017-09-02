import { copySync, removeSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import request from 'request-promise';
import { v4 } from 'uuid';

const headers = {
  'content-type': 'application/json',
  host: '127.0.0.1',
};
const image = 'autograde';
const stopTimeout = 5    //seconds
const urlBase = 'http://unix:/var/run/docker.sock:/v1.30';

const createOptions = (tempCodePath) => ({
  headers,
  body: JSON.stringify({
    image,
    stopTimeout,
    cmd: ['./code/script.sh'],
    hostConfig: {
      binds: [`${tempCodePath}:/code`],
    },
  }),
  method: 'post',
  url: `${urlBase}/containers/create`,
  volumes: {
    '/code': {},
  },
});

const logsOptions = (id) => ({
  headers,
  url: `${urlBase}/containers/${id}/logs?stdout=1`,
  method: 'get',
  body: JSON.stringify({
    follow: true,
    stdout: true,
    stderr: true,
  }),
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

const codePath = join(__dirname, '../../code/hw2');

const runCode = (code, res) => {
  const tempDir = v4();

  const tempCodePath = join(__dirname, `../../temp/${tempDir}`);

  copySync(codePath, tempCodePath);

  writeFileSync(join(codePath, 'student_src.c'), code);

  request(createOptions(tempCodePath))
    .then((body) => {
      const { Id, Warnings } = JSON.parse(body);
      if (Warnings) console.log(Warnings);
      return Id;
    })
    .then((Id) => {
      return request(startOptions(Id))
        .then(() => request(waitOptions(Id)))
        .then(() => request(logsOptions(Id)))
        .then(body => body)
        .catch((err) => {
          throw err;
        });
    })
    .then(body => {
      request(pruneOptions);
      removeSync(tempCodePath);
      res.status(200).send(body)
    })
    .catch((err) => {
      removeSync(tempCodePath);
      console.log('not here');
      const { statusCode, error } = err;
      const { message } = JSON.parse(error);
      console.error(`${statusCode}: ${message}`);
      res.status(statusCode).send(message);
    });
};

export { runCode };
