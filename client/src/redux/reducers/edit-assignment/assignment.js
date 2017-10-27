import {
  ADD_PARTID,
  CLEAR_ASSIGNMENT,
  REMOVE_PART_ID,
  SET_ASSIGNMENT,
  SET_DUE_DATE,
  SET_NAME,
  SET_VISIBLE,
} from '../../action-types/assignments';

const assignment = (state = {}, action) => {
  switch (action.type) {
    case ADD_PARTID:
      return {
        ...state,
        partIds: [...state.partIds, action.partId],
      };
    case CLEAR_ASSIGNMENT:
      return {};
    case REMOVE_PART_ID: {
      const { partIds } = state;
      return {
        ...state,
        partIds: partIds.slice(0, partIds.length - 1),
      };
    }
    case SET_ASSIGNMENT: {
      const { assignment, assignmentId } = action;
      return {
        ...assignment,
        assignmentId,
      };
    }
    case SET_DUE_DATE:
      return {
        ...state,
        dueDate: action.dueDate,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.visible,
      };
    default:
      return state;
  }
};

export default assignment;
