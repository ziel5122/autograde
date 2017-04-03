import AWS from 'aws-sdk';

import config from './AWSConfig';

AWS.config = config;

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "Movies",
    KeySchema: [
        { AttributeName: "year", KeyType: "HASH"},
        { AttributeName: "title", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
