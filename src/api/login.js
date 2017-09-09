const Router = require('express').Router;

const router = Router();

router.get('/login', (req, res) => {
  res.status(200).send('login get test successful');
})

router.post('/authorize', (req, res) => {
  res.status(200).send('authorize hit');
});

module.exports = router;
