require('dotenv').config();

const dynamodb = require('../server/src/aws/dynamo-db');

const NUM_ATTEMPTS = 5;

const params = {
  TableName: 'users',
  FilterExpression: 'privilege = :privilege',
  ExpressionAttributeValues: { ':privilege': 'user' },
};

dynamodb.scan(params, (err, { Items }) => {
  if (err) console.log(err, err.stack);
  else {
    Items.forEach(({ username }) => {
      const params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set attempts = :a',
        ExpressionAttributeValues: {
          ':a': NUM_ATTEMPTS,
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });
    });
  }
});
