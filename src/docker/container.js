import Docker from 'dockerode';
import fs from 'fs';
import { join } from 'path';
import request from 'request';

const headers = {
  'content-type': 'application/json',
  host: '127.0.0.1',
};

const urlBase = 'http://unix:/var/run/docker.sock:/v1.30';

request({
  headers,
  url: `${urlBase}/containers/create`,
  method: 'post',
  body: JSON.stringify({
    image: 'autograde',
    cmd: ['./code/script.sh'],
    hostConfig: {
      binds: [`${join(__dirname, '../../code')}:/code`],
    },
  }),
}, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const bodyJson = JSON.parse(body);
  console.log('body:', bodyJson); // Print the HTML for the Google homepage.
  const id = bodyJson.Id;

  request({
    headers,
    url: `${urlBase}/containers/${id}/start`,
    method: 'post',
  }, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    request({
      headers,
      url: `${urlBase}/containers/${id}/wait`,
      method: 'post',
    }, (error, response, body) => {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.

      request({
        headers,
        url: `${urlBase}/containers/${id}/logs?stdout=1`,
        method: 'get',
        body: JSON.stringify({
          follow: true,
          stdout: true,
          stderr: true,
        }),
      }, (error, response, body) => {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
    });
  });
});

/*
  'http://unix:/var/run/docker.sock:/v1.30/container/create', {
    'content-type': 'application/json',
    image: 'autograde',
    cmd: ['echo', 'hello world'],
    method: 'get',
  }, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
*/

/*
const docker = new Docker();

const code = fs.readFileSync(join(__dirname, '../../code/test.c')).toString();

docker.createContainer({
  attachStderr: true,
  attachStdout: true,
  attachStream: true,
  cmd: ['./code/script.sh'],
  hostConfig: {
    binds: [`${join(__dirname, '../../code')}:/code`],
  },
  image: 'autograde',
}).then(container => {
  return container.stream.pipe(process.stdout);
}).catch((err, container) => {
  console.error(err);
  container.stop();
});
*/





/*
docker.createContainer({
  image: 'ubuntu',
}).then(container => {
  container.fs.put('../../code/test.c', { path: 'root' });
}).then(container => {
  container.exec({
    attachstdout: true,
    cmd: ['ls'],
  });
}).then(exec => {
  exec.start();
}).then((err, data) => {
  if (err) console.error(err);
  else console.log(data);
}).catch(err => console.error(err));
*/
