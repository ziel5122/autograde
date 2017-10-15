const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const { docClient } = require('../aws');

const router = express.Router();

router.post('/authorize', ({ body }, res) => {
  const { username, password } = body;

  const usersParams = {
    Key: {
      username,
    },
    TableName: 'users',
  };

  docClient.get(usersParams).promise()
    .then(data => {
      const { Item } = data;
      if (Item && bcrypt.compareSync(password, Item.passwordHash)) {
        const payload = { username, privilege: Item.privilege };
        const token = jwt.sign(payload, process.env.JWT_SECRET)

        const response = { token, privilege: Item.privilege };

        const partsParams = {
          TableName: 'users-parts',
          KeyConditionExpression: 'username = :username',
          ExpressionAttributeValues: { ':username': username },
        };

        return docClient.query(partsParams).promise()
          .then(data => {
            response.userParts = data.Items;
            res.status(200).send(response);
          })
          .catch(err => {
            throw new Error(err);
          });
      } else {
        res.sendStatus(400);
      }
    })
    .catch(err => {
      console.log(err, err.stack);
      res.sendStatus(500);
    });
});

module.exports = router;
