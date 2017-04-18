import fs from 'fs';
import readline from 'readline';

let rd = readline.createInterface({
  input: fs.createReadStream('/users/austinzielinski/Downloads/emails'),
  console: false
});

const emails = [];
rd.on('line', (line) => {
  emails.push(line);
});

rd = readline.createInterface({
  input: fs.createReadStream('/users/austinzielinski/Downloads/passwords'),
  console: false
});

const passwords = [];
rd.on('line', (line) => {
  passwords.push(line);
});

rd.on('close', () => {
  fs.open('/users/austinzielinski/Downloads/334students', 'w', (err, fd) => {
    for (let i = 0; i < emails.length; i++) {
      fs.write(fd, `${emails[i]}, ${passwords[i]}\n`, (err, written, string) => {
        console.log(string);
      });
    }
  });
});
