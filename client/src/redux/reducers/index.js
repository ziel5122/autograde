import { combineReducers } from 'redux';

import assignments from './assignments';
import code from './code';
import editor from './editor';
import login from './login';

export default combineReducers({
  assignments,
  code,
  editor,
  login,
});
