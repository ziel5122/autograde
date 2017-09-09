const Router = require('express').Router;
const sign = require('jsonwebtoken').sign;

const router = Router();

router.get('/login', (req, res) => {
  res.status(200).send('login get test successful');
});

router.post('/authorize', ({ body }, res) => {
  const { username, password } = body;

  if (username === 'austin' && password === 'lladnar') {
    const token = sign({ username }, 'kitty');
    res.status(200).send(token);
  } else {
    res.status(400).send('username or password incorrect');
  }
});

module.exports = router;
