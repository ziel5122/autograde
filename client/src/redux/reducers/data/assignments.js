import assignment from './assignment';
import { SET_OPEN_TAB, TOGGLE_VISIBLE } from '../../types/data';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_OPEN_TAB: {
      const { assignmentId } = action;
      return {
        ...state,
        [assignmentId]: assignment(state[assignmentId], action),
      };
    }
    case TOGGLE_VISIBLE: {
      const { assignmentId } = action;
      return {
        ...state,
        [assignmentId]: assignment(state[assignmentId], action),
      };
    }
    default:
      return state;
  }
};
