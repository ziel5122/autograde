const Router = require('express').Router;

const router = Router();

router.get('/docker', (req, res) => {
  res.status(200).send('docker get test successful');
});

router.post('/run', (body, res) => {
  res.status(200).send('run hit');
});

module.exports = router;
