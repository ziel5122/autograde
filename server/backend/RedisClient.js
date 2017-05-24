import redis from 'redis';

const redisConfig = require('../../config/redis-config.json');

const RedisClient = redis.createClient(redisConfig.url);

export default RedisClient;
