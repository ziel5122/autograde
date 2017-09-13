const Datastore = require('@google-cloud/datastore');
const join = require('path').join;

const DATASTORE_CREDENTIALS = join(
  __dirname,
  '../../../config/datastore-credentials.json'
);

const datastore = Datastore({
  keyFilename: DATASTORE_CREDENTIALS,
});

module.exports = datastore;
