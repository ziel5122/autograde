/* eslint-env node */
import bodyParser from 'body-parser';
import express from 'express';

import AuthService from '../back/auth-service';

const router = express.Router();

router.use(bodyParser.json());

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  AuthService.login(username, password, (token) => {
    res.send(token);
  });
});

router.post('/verify', (req, res) => {
  AuthService.verify(req.body.token, (valid) => {
    res.send(valid);
  });
});

export default router;
