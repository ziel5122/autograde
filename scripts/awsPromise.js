require('dotenv').config();

const { docClient } = require('../server/src/aws');

const params = {
  TableName: 'assignments',
};

const scanPromise = docClient.scan(params).promise();

scanPromise
  .then(res => console.log(res))
  .catch(err => console.log(err, err.stack));
