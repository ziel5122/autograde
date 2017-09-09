import { copySync, removeSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import request from 'request-promise';
import { v4 } from 'uuid';

import {
  createOptions,
  deleteOptions,
  logsOptions,
  pruneOptions,
  startOptions,
  waitOptions,
} from './options';

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

export { runCode };
