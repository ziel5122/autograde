import { json } from 'body-parser';
import express from 'express';

import test from './endpoints/test';

const app = express();
app.use(json());

test(app);

app.listen(parseInt(process.env.PORT, 10) || 8080);
