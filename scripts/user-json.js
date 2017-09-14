const bcrypt = require('bcryptjs');
const fs = require('fs-extra');
const path = require('path');
const randomstring = require('randomstring');

const users = {};
const passwords = [];

const usersFile = fs.readFileSync(
  path.join(__dirname, '../config/cst334_fa17.csv'),
  'utf-8'
);

const lines = usersFile.split('\r\n');


lines.forEach((line) => {
  if (line) {
    const info = line.split(',');

    let password = randomstring.generate(12);
    while (passwords.indexOf(password) !== -1) {
      password = randomstring.generate(12);
    }

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);

    const match = bcrypt.compareSync(password, passwordHash);
    if (!match) {
      console.log(`error, doesn't match`);
    }

    const [ firstName, lastName, username ] = info;

    users[username] = {
      firstName,
      lastName,
      password,
      passwordHash,
    };
  }
});

fs.writeFile('../config/users.json', JSON.stringify(users, null, 2));
