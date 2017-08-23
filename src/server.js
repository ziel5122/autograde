import express from 'express';

import docker from './api/docker';

const PORT = 3000;

const app = express();

app.use('/docker', docker);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on port ${PORT}`);
  }
});
