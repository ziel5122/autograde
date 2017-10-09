const { combineReducers } = require('redux');

const assignments = require('./assignments');
const code = require('./code');
const editor = require('./editor');
const login = require('./login');

module.exports = combineReducers({
  assignments,
  code,
  editor,
  login,
});
