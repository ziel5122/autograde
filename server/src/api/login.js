import bcrypt from 'bcryptjs';
import { Router } from 'express';
import { sign } from 'jsonwebtoken';
import redis from 'redis';

import jwtConfig from '../../config/jwt';
import redisConfig from '../../config/redis';

const client = redis.createClient(redisConfig.uri);

const router = Router();

router.get('/login', (req, res) => {
  res.sendStatus(200);
});

router.post('/authorize', ({ body }, res) => {
  const { username, password } = body;

  client.hgetall(username, (err, obj) => {
    if (obj && bcrypt.compareSync(password, obj.passwordHash)) {
      const token = sign({ username }, jwtConfig.secret);
      delete obj.passwordHash;
      res.status(200).send({ token, obj });
    } else {
      res.sendStatus(400);
    }
  });
});

export default router;
