const express = require('express');
const join = require('path').join;
const json = require('body-parser').json;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'static')));
}

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
