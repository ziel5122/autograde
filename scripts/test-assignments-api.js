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
          },
          {
            name: 'most_proc.sh',
            attempts: 5,
          },
          {
            name: 'msh',
            attempts: 5,
          }
        ]
      },
      {
        id: 'hw6',
        name: 'Homework 6',
        dueDate: '2017-10-02',
        attempts: 5,
        visible: true,
        parts: [
          {
            name: 'freesize.awk',
            attempts: 5,
          },
          {
            name: 'count_allocs.awk',
            attempts: 5,
          },
          {
            name: 'num_bytes.awk',
            attempts: 5,
          },
          {
            name: 'succ_reqs.awk',
            attempts: 5,
          },
          {
            name: 'list_sizes.awk',
            attempts: 5,
          },
        ]
      },
      {
        id: 'hw8',
        name: 'Homework 8',
        dueDate: '2017-10-16',
        attempts: 5,
        editors: 2,
        visible: true,
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
