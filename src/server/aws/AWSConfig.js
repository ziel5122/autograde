import AWS from 'aws-sdk';

let access = process.env.AWS_ACCESS_KEY_ID;
let secret = process.env.AWS_SECRET_ACCESS_KEY;
let region = 'us-west-1';
let endpoint;

if (!access || !secret) {
  const localConfig = require('../../../json/local.json');
  access = localConfig.accessKeyId;
  secret = localConfig.secretAccessKey;
  region = localConfig.region;
  endpoint = localConfig.endpoint;
}

const credentials = new AWS.Credentials(access, secret);

AWS.config.update({
  credentials,
  region,
  endpoint,
});

export default AWS.config;
