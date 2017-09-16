const fs = require('fs-extra');
const path = require('path');

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../config/users.json'), 'utf-8')
);

Object.keys(users).forEach((user) => {
  console.log(`${users[user].firstName}, ${users[user].lastName}, ${user}, ${users[user].password}`);
})
