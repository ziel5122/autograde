import { combineReducers } from 'redux';

import auth from './auth';
import data from './data';
import editAssignment from './edit-assignment';
import user from './user';

const rootReducer = combineReducers({
  auth,
  data,
  editAssignment,
  user,
});

export default rootReducer;
