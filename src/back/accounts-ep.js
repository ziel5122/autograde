/* eslint-env node */
import bodyParser from 'body-parser';
import express from 'express';

import AuthService from '../back/AuthService';

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  AuthService.login(username, password, (err, token) => {
    if (err) {
      res.status(401);
      res.send(err);
    }
    res.status(200);
    res.send(token);
  });
});

router.post('/verify', (req, res) => {
  AuthService.verify(req.body.token, (valid) => {
    res.send(valid);
  });
});

export default router;
