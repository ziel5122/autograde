import { combineReducers } from 'redux';

import assignmentIds from './assignmentIds';
import assignments from './assignments';
import auth from './auth';
import edit from './edit';
import editors from './editors';
import parts from './parts';
import user from './user';

const rootReducer = combineReducers({
  assignmentIds,
  assignments,
  auth,
  edit,
  editors,
  parts,
  user,
});

export default rootReducer;
