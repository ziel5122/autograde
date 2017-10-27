import { combineReducers } from 'redux';

import assignmentIds from './assignmentIds';
import assignments from './assignments';
import editors from './editors';
import parts from './parts';

export default combineReducers({
  assignmentIds,
  assignments,
  editors,
  parts,
});
