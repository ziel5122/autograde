const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const { docClient } = require('../aws');

const router = express.Router();

router.post('/authorize', ({ body }, res) => {
  const { username, password } = body;

  const params = {
    Key: {
      username,
    },
    TableName: 'users',
  };

  docClient.get(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      res.sendStatus(500);
    } else {
      const { Item } = data;
      if (Item && bcrypt.compareSync(password, Item.passwordHash)) {
        const payload = { username, privilege: Item.privilege };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        const assignments = Item.assignments.filter((assignment) => (
          assignment.visible
        ));
        const response = { assignments, token };
        res.status(200).send(response);
      } else {
        res.sendStatus(400);
      }
    }
  });
});

module.exports = router;
