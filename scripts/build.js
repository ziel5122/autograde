const fs = require('fs-extra');
const join = require('path').join;
const webpack = require('webpack');

const clientConfig = require('../config/webpack.client.prod');
const copySync = fs.copySync;

const CODE_DIR = join(__dirname, '../code');
const DIST_DIR = join(__dirname, '../dist');
const ENV_PATH = join(__dirname, '../.env');
const INDEX_PATH = join(__dirname, '../public/index.html');

const DOCKERFILE_PATH = join(__dirname, '../config/Dockerfile');
const PACKAGE_JSON_PATH = join(__dirname, '../config/package.json');
const YAML_PATH = join(__dirname, '../config/app.yaml');
const DS_CREDS_PATH = join(__dirname, '../config/datastore-credentials.json');

const API_DIR = join(__dirname, '../src/api');
const DOCKER_DIR = join(__dirname, '../src/docker');
const GCP_DIR = join(__dirname, '../src/gcp');
const SERVER_PATH = join(__dirname, '../src/server.js');
const UTILS_DIR = join(__dirname, '../src/utils');

const DEPLOY_PATH = join(__dirname, '../scripts/deploy.sh');
const UPDATE_DOCKER_PATH = join(__dirname, '../scripts/update_docker.sh');
const UPDATE_HW_PATH = join(__dirname, '../scripts/update_hw.sh');

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
copySync(YAML_PATH, join(DIST_DIR, 'app.yaml'));
copySync(DEPLOY_PATH, join(DIST_DIR, 'scripts/deploy.sh'));
copySync(DOCKERFILE_PATH, join(DIST_DIR, 'config/Dockerfile'));
copySync(UPDATE_DOCKER_PATH, join(DIST_DIR, 'scripts/update_docker.sh'));
copySync(UPDATE_HW_PATH, join(DIST_DIR, 'scripts/update_hw.sh'));
copySync(DS_CREDS_PATH, join(DIST_DIR, 'config/datastore-credentials.json'));
