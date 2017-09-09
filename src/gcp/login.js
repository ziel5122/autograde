const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const datastore = require('./datastore');
const jwtSecret = require('../../config/keys').jwtSecret;

const login = (username, password) => (
  new Promise((resolve, reject) => {
    const key = datastore.key(['User', username]);
    datastore.get(key, (err, entity) => {
      if (err) return reject(err);
      if (typeof entity === 'undefined') {
        return resolve({
          status: 400,
          statusText: 'username or password incorrect',
        });
      }
      if (bcrypt.compareSync(password, entity.passwordHash)) {
        const token = jwt.sign({}, process.env.JWT_SECRET);
        resolve({
          status: 200,
          statusText: token,
        });
      }
      return resolve({
        status: 400,
        statusText: 'username or password incorrect',
      });
    });
  })
);

module.exports = login;
