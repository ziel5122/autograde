const request = require('request-promise');

request({
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    username: 'austin',
    password: 'lladnar',
  }),
  method: 'post',
  url: 'http://localhost:8892/login/authorize',
})
  //.then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
