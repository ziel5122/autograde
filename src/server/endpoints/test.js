import express from 'express';

const app = express.Router();

app.get('/test', (req, res) => {
  res.send("Test unsuccessful");
});

app.get('/test2', (req, res) => {
  res.send("Test2 successful");
});

module.exports = app;
