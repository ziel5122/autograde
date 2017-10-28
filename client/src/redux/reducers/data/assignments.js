import {
  SET_OPEN_TAB,
  TOGGLE_VISIBLE,
} from '../../types/assignments';

const assignment = (state, action) => {
  switch (action.type) {
    case SET_OPEN_TAB:
      return {
        ...state,
        openTab: action.partId,
      };
    case TOGGLE_VISIBLE:
      return {
        ...state,
        visible: !state.visible,
      }
    default:
      return state;
  }
};

const assignments = (state = {}, action) => {
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

export default assignments;
