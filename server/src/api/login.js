const bcrypt = require('bcryptjs');
const dynamodb = require('../aws/dynamo-db');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/authorize', ({ body }, res) => {
  const { username, password } = body;

  const params = {
    Key: {
      username,
    },
    TableName: 'users',
  };

  dynamodb.get(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      res.sendStatus(500);
    } else {
      const { Item } = data;
      if (Item && bcrypt.compareSync(password, Item.passwordHash)) {
        const token = jwt.sign({
          username,
          privilege: Item.privilege,
        }, process.env.JWT_SECRET);
        res.status(200).send(token);
      } else {
        res.sendStatus(400);
      }
    }
  });
});

module.exports = router;
