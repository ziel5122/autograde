import { combineReducers } from 'redux';

import assignment from './assignment';
import editors from './editors';
import parts from './parts';

export default combineReducers({
  assignment,
  editors,
  parts,
});
