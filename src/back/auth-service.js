/* eslint-env node */
import jwt from 'jsonwebtoken';
import redis from 'redis';

import client from './redis';

export default {
  login(username, password, callback) {
    let token = '';
    client.get(username, (err, reply) => {
      if (reply && password === reply) {
        token = jwt.sign({ username }, 'super secret');
      }
      callback(token);
    });
  },

  verify(token, callback) {
    jwt.verify(token, 'super secret', (err, decoded) => {
      if (err) console.error(err);
      callback(!!decoded);
    });
  },
};
