require('dotenv').config();

const { sign } = require('jsonwebtoken');
const request = require('request-promise');

const token = sign({}, process.env.JWT_SECRET);

request({
  body: JSON.stringify({
    token,
  }),
  headers: { 'content-type': 'application/json' },
  method: 'post',
  url: 'http://localhost:3000/assignments/get-visible',
})
  .then(response => console.log(response))
  .catch(err => console.log(err, err.stack));
