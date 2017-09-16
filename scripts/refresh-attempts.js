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
      let params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set attempt1 = :empty',
        ExpressionAttributeValues: {
          ':empty': ' ',
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });

      params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set attempt2 = :empty',
        ExpressionAttributeValues: {
          ':empty': ' ',
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });

      params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set attempt3 = :empty',
        ExpressionAttributeValues: {
          ':empty': ' ',
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });

      params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set attempt4 = :empty',
        ExpressionAttributeValues: {
          ':empty': ' ',
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });

      params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set attempt5 = :empty',
        ExpressionAttributeValues: {
          ':empty': ' ',
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });

      params = {
        TableName: 'users',
        Key: {
          username,
        },
        UpdateExpression: 'set correct = :false',
        ExpressionAttributeValues: {
          ':false': false,
        },
      };

      dynamodb.update(params, (err, data) => {
        if (err) console.log(err, err.stack);
      });
    });
  }
});
