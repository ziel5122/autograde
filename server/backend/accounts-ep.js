/* eslint-env node */
import bodyParser from 'body-parser';
import express from 'express';

import AuthService from './AuthService';

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log('username2', username);
  console.log('password2', password);
  AuthService.login(username, password, (err, token) => {
    console.log(err);
    console.log(token);
    if (err) {
      res.status(401);
    } else {
      res.status(200);
    }
    res.send(token);
  });
});

router.post('/verify', (req, res) => {
  AuthService.verify(req.body.token, (valid) => {
    res.send(valid);
  });
});

export default router;
