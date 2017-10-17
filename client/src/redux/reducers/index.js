import { combineReducers } from 'redux';

import assignmentIds from './assignmentIds';
import assignments from './assignments';
import editors from './editors';
import login from './login';
import parts from './parts';
import user from './user';

const rootReducer = combineReducers({
  assignmentIds,
  assignments,
  editors,
  login,
  parts,
  user,
});

export default rootReducer;
