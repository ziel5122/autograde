const AWS = require('aws-sdk');

const { accessKeyId, region, secretAccessKey } = process.env;

AWS.config.setPromisesDependency();

const docClient = new AWS.DynamoDB.DocumentClient({
  accessKeyId,
  region,
  secretAccessKey
});

module.exports = { docClient };
