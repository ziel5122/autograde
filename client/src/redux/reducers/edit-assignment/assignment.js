import * as types from '../../types/edit-assignment';

const assignment = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_PART_ID:
      return {
        ...state,
        partIds: [...state.partIds, action.partId],
      };
    case types.CLEAR_ASSIGNMENT:
      return {};
    case types.REMOVE_PART_ID: {
      const { partIds } = state;
      return {
        ...state,
        partIds: partIds.slice(0, partIds.length - 1),
      };
    }
    case types.SET_ASSIGNMENT: {
      const { assignment, assignmentId } = action;
      return {
        ...assignment,
        assignmentId,
      };
    }
    case types.SET_DUE_DATE:
      return {
        ...state,
        dueDate: action.dueDate,
      };
    case types.SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case types.SET_VISIBLE:
      return {
        ...state,
        visible: action.visible,
      };
    default:
      return state;
  }
};

export default assignment;
