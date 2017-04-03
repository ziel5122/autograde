import express from 'express';

const app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a wimner");
});

module.exports = app;
