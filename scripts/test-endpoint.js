require('dotenv').config();

const jwt = require('jsonwebtoken');
const request = require('request-promise');

const token = jwt.sign({}, 'kitty cat');

request({
  body: JSON.stringify({ token }),
  headers: { 'content-type': 'application/json' },
  method: 'post',
  url: 'http://localhost:3000/docker/post',
})
  .then(response => console.log(response.status))
  .catch(err => {
    if (err.name === 'StatusCodeError') {
      console.log(err.stack);
      console.log(err.statusCode);
    } else {
      console.log(err, err.stack);
    }
  });
