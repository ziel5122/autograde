require('dotenv').config();

const { sign } = require('jsonwebtoken');
const request = require('request-promise');

const token = sign({}, process.env.JWT_SECRET);

request({
  body: JSON.stringify({
    changes: [
      {
        id: 'hw5',
        name: 'Homework 5',
        dueDate: '2017-09-25',
        visible: true,
        parts: [
          {
            name: 'backup.sh',
            attempts: 5,
            dir: 'backup',
          },
          {
            name: 'most_proc.sh',
            attempts: 5,
            dir: 'backup',
          },
          {
            name: 'msh',
            attempts: 5,
            dir: 'backup',
          }
        ]
      },
      {
        id: 'hw6',
        name: 'Homework 6',
        dueDate: '2017-10-02',
        attempts: 5,
        visible: false,
      },
      {
        id: 'hw7',
        name: 'Homework 7',
        dueDate: '2017-10-09',
        attempts: 5,
        visible: false,
      },
    ],
    token,
  }),
  headers: { 'content-type': 'application/json' },
  method: 'post',
  url: 'http://localhost:3000/assignments/set-visible',
})
  .then(response => console.log(response))
  .catch(err => console.log(err, err.stack));
