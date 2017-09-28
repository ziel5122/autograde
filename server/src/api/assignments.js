const { Router } = require('express');
const { verify } = require('jsonwebtoken');

const { docClient } = require('../aws');

const ASSIGNMENTS_TABLE = 'assignments';
const { JWT_SECRET } = process.env;

const assignments = (socket) => {
  const router = Router();

  router.post('/get-assignments', ({ body: { token } }, res) => {
    verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err, err.stack);
        res.sendStatus(400);
      } else {
        const params = {
          TableName: ASSIGNMENTS_TABLE,
        };

        docClient.scan(params, (error, { Items }) => {
          if (error) {
            console.log(err, err.stack);
            res.sendStatus(500);
          } else {
            res.status(200).send(Items);
          }
        });
      }
    });
  });

  router.post('/set-visible', ({ body: { changes, token } }, res) => {
    verify(
      token,
      JWT_SECRET,
      { privilege: 'admin' },
      (err, decoded) => {
        if (err) {
          console.log(err, err.stack);
          res.sendStatus(400);
        } else {
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
                socket.emit('assignments', changes);
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

                const params = {
                  TableName: ASSIGNMENTS_TABLE,
                };

                docClient.scan(params, (error, { Items }) => {
                  if (error) {
                    console.log(err, err.stack);
                    res.sendStatus(500);
                  } else {
                    res.sendStatus(200);
                    socket.emit('assignments', Items);
                  }
                });
              }
            });
          }
        }
      }
    );
  });

  return router;
};

module.exports = assignments;
