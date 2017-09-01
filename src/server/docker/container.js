import { join } from 'path';
import request from 'request-promise';

const headers = {
  'content-type': 'application/json',
  host: '127.0.0.1',
};
const image = 'autograde';
const stopTimeout = 5    //seconds
const urlBase = 'http://unix:/var/run/docker.sock:/v1.30';

const createOptions = {
  headers,
  body: JSON.stringify({
    image,
    stopTimeout,
    cmd: ['./code/script.sh'],
    hostConfig: {
      binds: [`${join(__dirname, '../../code')}:/code`],
    },
  }),
  method: 'post',
  url: `${urlBase}/containers/create`,
  volumes: {
    '/code': {},
  },
};

const logsOptions = (id) => ({
  headers,
  url: `${urlBase}/containers/${id}/logs?stdout=1`,
  method: 'get',
  body: JSON.stringify({
    stdout: true,
    stderr: true,
  }),
});

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

const runCode = (code, res) => {
  request(createOptions)
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
      res.send(body)
    })
    .catch((err) => {
      const { statusCode, error } = err;
      const { message } = JSON.parse(error);
      console.error(`${statusCode}: ${message}`);
      res.status(statusCode).send(message);
    });
};

export { runCode };
