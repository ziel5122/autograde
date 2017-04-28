/* eslint-env node */
import jwt from 'jsonwebtoken';
import redis from 'redis';

import RedisClient from './RedisClient';

const AuthService = {
  login(username, password, callback) {
    RedisClient.get(username, (err, reply) => {
      if (reply && password === reply) {
        const token = jwt.sign({ username }, 'super secret');
        callback(null, token);
      } else {
        const error = "username or password incorrect";
        callback(error, null);
      }
    });
  },

  verify(token, callback) {
    jwt.verify(token, 'super secret', (err, decoded) => {
      if (err) console.error(err);
      callback(!!decoded);
    });
  },
};

export default AuthService;
