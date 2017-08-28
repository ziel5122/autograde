import { Router } from 'express';

const router = Router();

router.get('/run', (req, res) => {
  res.send('run endpoint hit');
});

export default router;
