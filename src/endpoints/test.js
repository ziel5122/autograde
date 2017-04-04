import { Router } from 'express';

const test = Router();

test.get('/test', (req, res) => {
  res.send("Test very jjsuccessful");
});

export default test;
