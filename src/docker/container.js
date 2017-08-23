import Docker from 'dockerode';
import fs from 'fs';
import { join } from 'path';

const docker = new Docker();

const code = fs.readFileSync(join(__dirname, '../../code/test.c')).toString();

const volume = {
  name: 'code',
  mountPoint: join(__dirname, '../../code'),
};

docker.createVolume(volume, (err, volume) => {

  volume.inspect((err, info) => {
    console.log(info);
  });

  docker.createContainer({
    cmd: ['gcc', '/code/test.c', '-o', '/code/test'],
    hostConfig: {
      binds: [`${join(__dirname, '../../code')}:/code`],
    },
    image: 'ubuntu',
    Volumes: {
      '/code': {},
    },
  }, (err, container) => {
    container.attach({
      stream: true,
      stdout: true,
      stderr: true,
    }, (err, stream) => {
      stream.pipe(process.stdout);

      container.start((err, data) => {
        if (err) console.error(err);
        console.log(data);

        container.exec('./code/test');
      });
    });
  });
});







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
