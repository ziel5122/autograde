import { combineReducers } from 'redux';

import assignments from './assignments';
import editor from './editor';
import login from './login';

export default combineReducers({
  assignments,
  editor,
  login,
});
