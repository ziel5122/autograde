const { Router } = require('express');

const { docClient } = require('../aws');

const ASSIGNMENTS_TABLE = 'assignments';

const assignments = (socket) => {
  const router = Router();

  router.get('/get', (req, res) => {
    res.sendStatus(200)
  });

  router.post('/visible', ({ body }, res) => {
    console.log(body);
    const { changes } = body;

    if (changes.length > 1) {
      const putRequests = changes.map((change) => ({
        PutRequest: {
          Item: change,
        }
      }));

      const params = {
        RequestItems: {
          [ASSIGNMENTS_TABLE]: putRequests,
        },
      };

      docClient.batchWrite(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          res.sendStatus(500);
        } else {
          console.log(data);
          res.sendStatus(200);
        }
      });
    } else {
      const params = {
        TableName: ASSIGNMENTS_TABLE,
        Item: changes[0],
      };

      docClient.put(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          res.sendStatus(500);
        } else {
          console.log(data);
          res.sendStatus(200);
        }
      });
    }
  });

  return router;
};

module.exports = assignments;
