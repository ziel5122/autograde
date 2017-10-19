import { combineReducers } from 'redux';

import admin from './admin';
import assignmentIds from './assignmentIds';
import assignments from './assignments';
import auth from './auth';
import editors from './editors';
import parts from './parts';
import user from './user';

const rootReducer = combineReducers({
  admin,
  assignmentIds,
  assignments,
  auth,
  editors,
  parts,
  user,
});

export default rootReducer;
