const bcrypt = require('bcryptjs');
const redis = require('redis');

const config = require('../config/redis');

const client = redis.createClient(config.uri);

client.hgetall('austin', (err, res) => {
  const same = bcrypt.compareSync('lladnar', res.passwordHash);
  console.log(same);
});


client.quit();
