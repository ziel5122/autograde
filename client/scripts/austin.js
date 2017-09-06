const redis = require('redis');
const Promise = require('bluebird');
const bcrypt = require('bcryptjs');

const config = require('../config/redis');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const salt = bcrypt.genSaltSync(10);

console.log(hash);

const client = redis.createClient(config.uri);

client.del('austin', redis.print);

client.hmset('austin', 'passwordHash', hash, redis.print);

client.hgetall('austin', (err, res) => console.log(res));

client.quit();
