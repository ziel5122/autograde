import fs from 'fs';
import readline from 'readline';
import redis from 'redis';

const client = redis.createClient(process.env.REDIS_URL);

client.on('error', (err) => {
  console.log(`Error: ${err}`);
});

let rd = readline.createInterface({
  input: fs.createReadStream('/users/austinzielinski/Downloads/334students'),
  console: false
});
/*
rd.on('line', (line) => {
  const splits = line.split(', ');
  client.set(splits[0], splits[1], redis.print);
});

rd = readline.createInterface({
  input: fs.createReadStream('/users/austinzielinski/Downloads/334students'),
  console: false
});
*/
rd.on('line', (line) => {
  const splits = line.split(', ');
  client.get('bad username', (err, reply) => {
    if (err) console.error(err);
    else console.log(reply);
  });
});
