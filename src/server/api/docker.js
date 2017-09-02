import { Router } from 'express';

import { runCode } from '../docker/container';

const router = Router();

const allowed = ['0808', '1109'];

router.post('/run', ({ body }, res) => {
  const { id, code } = body;

  if (allowed.indexOf(id) === -1) {
    res.status(400).send('not authorized');
  } else {
    runCode(code, res);
  }
});

router.get('*', (req, res) => {
  res.status(404).send(`page doesn't exist goof`);
});

export default router;
