import bcrypt from 'bcryptjs';
import { Router } from 'express';
import { sign } from 'jwt';
import redis from 'redis';

import jwtConfig from '../../config/jwt';
import redisConfig from '../../config/redis';

const redisClient = redis.createClient(redisConfig.uri);

const router = Router();

router.post('/login', ({ body }, res) => {
  const { username, passowrd } = body;

  redis.get(username, (err, reply) => {
    if (reply && bcrypt.compareSync(password, reply)) {
      const token = jwt.sign({ username }, jwtConfig.secret);
      res.status(200).send(token);
    } else {
      res.sendStatus(400);
    }
  });
});

export default router;
