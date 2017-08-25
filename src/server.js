var express = require('express');
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
