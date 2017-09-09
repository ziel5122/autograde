import { diffChars, diffLines } from 'diff';
import { Router } from 'express';
import { copySync, readFileSync, removeSync, writeFileSync } from 'fs-extra';
import { verify } from 'jsonwebtoken';
import { join } from 'path';
import request from 'request-promise';
import { v4 } from 'uuid';

import { runCode } from '../docker/container';
import { pruneOptions } from '../docker/options';
import jwtConfig from '../../config/jwt';

const codePath = join(__dirname, '../code');

const router = Router();

router.get('/docker', (req, res) => {
  res.send(200);
});

router.post('/run', ({ body }, res) => {
  const { jwt, code, hwNum } = body;
  console.log('here');

  verify(jwt, jwtConfig.secret, (err, decoded) => {
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

router.get('*', (req, res) => {
  res.status(404).send(`page doesn't exist goof`);
});

export default router;
