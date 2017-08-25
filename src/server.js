import express from 'express';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';

// import Main from './main';
import reducers from './reducers';

const PORT = process.env.PORT || 3000;

const renderHtml = (appHtml, store) => (`
<!doctype html>
<style>
  body {
    font-family: roboto, sans-serif;
    margin: 0;
  }
</style>
<meta charset="utf-8" />
<meta name="author" content="Austin Zielinski">
<meta name="description" content="automated grading for the Operating Systems course at CSUMB">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>autograde</title>
<div id="root" style="height:100vh;width:100%;margin:0" />
<script src="node-static.js"></script>
<script src="client.bundle.js"></script>
<script>
  // WARNING: See the following for security issues around embedding JSON in HTML:
  // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
  window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
</script>
`);

const store = createStore(reducers);

const html = renderHtml(appHtml, store);

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
