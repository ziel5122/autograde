const request = require('request-promise');

request({
  body: JSON.stringify({
    changes: [
      {
        id: 'hw5',
        dueDate: '2017-09-25',
        attempts: 5,
        visible: false,
      },
      {
        id: 'hw6',
        dueDate: '2017-10-02',
        attempts: 5,
        visible: true,
      }
    ],
  }),
  headers: { 'content-type': 'application/json' },
  method: 'post',
  url: 'http://localhost:3000/assignments/visible',
})
  .then(response => console.log(response))
  .catch(err => console.log(err, err.stack));
