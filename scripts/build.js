const fs = require('fs-extra');
const join = require('path').join;
const webpack = require('webpack');

const clientConfig = require('../config/webpack.client.prod');
const copySync = fs.copySync;

const API_DIR = join(__dirname, '../src/api');
const CODE_DIR = join(__dirname, '../code');
const DIST_DIR = join(__dirname, '../dist');
const DOCKER_DIR = join(__dirname, '../src/docker');
const ENV_PATH = join(__dirname, '../.env');
const GCP_DIR = join(__dirname, '../src/gcp');
const INDEX_PATH = join(__dirname, '../public/index.html');
const PACKAGE_JSON_PATH = join(__dirname, '../public/package.json');
const SERVER_PATH = join(__dirname, '../src/server.js');
const UTILS_DIR = join(__dirname, '../src/utils');

fs.removeSync(DIST_DIR);

webpack(clientConfig, (err, stats) => {
  if (err) console.error(err);
});

copySync(API_DIR, join(DIST_DIR, 'src/api'));
copySync(CODE_DIR, join(DIST_DIR, 'code'));
copySync(DOCKER_DIR, join(DIST_DIR, 'src/docker'));
copySync(ENV_PATH, join(DIST_DIR, '.env'));
copySync(GCP_DIR, join(DIST_DIR, 'src/gcp'));
copySync(INDEX_PATH, join(DIST_DIR, 'src/index.html'));
copySync(PACKAGE_JSON_PATH, join(DIST_DIR, 'package.json'))
copySync(SERVER_PATH, join(DIST_DIR, 'src/server.js'));
copySync(UTILS_DIR, join(DIST_DIR, 'src/utils'));
