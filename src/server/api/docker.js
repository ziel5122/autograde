import { Router } from 'express';
import { copySync, removeSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import request from 'request-promise';
import { v4 } from 'uuid';

import { runCode } from '../docker/container';
import { pruneOptions } from '../docker/options';

const router = Router();

const allowed = ['0808', '1109'];
const codePath = join(__dirname, '../../code');

router.post('/run', ({ body }, res) => {
  const { id, code, hwNum } = body;

  if (allowed.indexOf(id) === -1) {
    res.status(400).send('not authorized');
  } else {
    const hwCodePath = join(codePath, `hw${hwNum}`);
    const tempCodePath = join(__dirname, `../../temp/${v4()}`);

    copySync(hwCodePath, tempCodePath);
    writeFileSync(join(tempCodePath, 'student_src.c'), code);

    runCode(tempCodePath)
      .then((output) => {
        res.status(200).send(output);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
      .then(() => {  
        request(pruneOptions);
        removeSync(tempCodePath);
      });
  }
});

router.get('*', (req, res) => {
  res.status(404).send(`page doesn't exist goof`);
});

export default router;
