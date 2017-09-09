const Datastore = require('@google-cloud/datastore');
const join = require('path').join;

const GCP_CREDENTIALS_PATH = join(__dirname, '../../config/autograde-d565d3c6192b.json');

const datastore = Datastore({
  keyFilename: GCP_CREDENTIALS_PATH,
});

module.exports = datastore;
