/* esline-env node */
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import express from 'express';
import fs from 'fs';
import path from 'path';
import v4 from 'uuid';

import AuthService from './AuthService';

const tempPath = path.resolve(__dirname, '../../temp');

let previous = 'notactuallyafile';

const runSandbox = (language, code, callback) => {
  exec(`rm ${tempPath}/${previous}*`);
  const name = v4();
  const filePath = path.resolve(__dirname, `../../temp/${name}.c`);
  const outPath = path.resolve(__dirname, `../../temp/${name}`);
  fs.writeFile(filePath, code, (err) => {
    if (err) console.error(err);
    exec(`gcc ${filePath} -o ${outPath}`, (error, stdout, stderr) => {
      exec(outPath, (error, stdout, stderr) => {
        previous = name;
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
