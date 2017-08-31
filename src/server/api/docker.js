import { Router } from 'express';

const router = Router();

const allowed = ['0808', '1109'];

router.get('/run', (req, res) => {
  const { id, code } = req.body;
  console.log(req.body);

  if (allowed.indexOf(id) === -1) {
    res.status(400).send('not authorized');
  } else {
    res.send(`you submitted this code: ${code}`);
  }
});

router.get('*', (req, res) => {
  res.status(404).send(`page doesn't exist goof`);
});

export default router;
