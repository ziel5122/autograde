const Router = require('express').Router;

const login = require('../gcp/login');

const router = Router();

router.get('/login', (req, res) => {
  res.status(200).send('login get test successful');
});

router.post('/authorize', ({ body }, res) => {
  const { username, password } = body;

  login(username, password)
    .then(({ status, statusText }) => {
      res.status(status).send(statusText);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
