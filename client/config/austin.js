import { genSaltSync, hashSync } from 'bcryptjs';
import redis from 'redis';

import redisConfig from './redis';

const uuid = '192c09ce-9e85-4546-8772-bc80dbb28e53';
const password = 'lladnar';

const redisClient = redis.createClient(redisConfig.uri);

const salt = genSaltSync(10);
const hash = hashSync(password, salt);

redisClient.on('connect', () => {
  console.log('connected');

  redisClient.hmset('hash', {'password': '222'}, redis.print);
  redisClient.hgetall('hash', (err, obj) => console.log(obj));

  redisClient.quit();
});
