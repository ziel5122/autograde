import ReactDOMServer from 'react-dom/server';

import Main from '../main/Main.jsx';

export default function test(app) {
  app.get('/test2', (req, res) => {
    res.send('Test unsuccessful!');
  });

  app.get('/test2', (req, res) => {
    res.send('Successful');
  });
}
