var express = require('express');
var join = require('path').join;

var PORT = process.env.PORT || 3000;

var app = express();

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
