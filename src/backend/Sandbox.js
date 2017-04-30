/* esline-env node */
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import express from 'express';
import fs from 'fs';
import path from 'path';

import AuthService from './AuthService';

const runSandbox = (language, code, callback) => {
  const filePath = path.resolve(__dirname, '../../temp/code.c');
  const outPath = path.resolve(__dirname, '../../temp/code');
  fs.writeFile(filePath, code, (err) => {
    if (err) console.error(err);
    exec('gcc ' + filePath + ' -o ' + outPath, (error, stdout, stderr) => {
      exec(outPath, (error, stdout, stderr) => {
        callback(`${stdout}`);
      });
    });
  });
};

const router = express.Router();

router.use(bodyParser.json());

router.post('/code', (req, res) => {
  const language = req.body.language;
  const code = req.body.code;

  console.log(req.body);
  console.log(code);

  runSandbox(language, code, (output) => {
    res.send(output);
  });
});

export default router;
