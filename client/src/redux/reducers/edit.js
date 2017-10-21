import { combineReducers } from 'redux';

const assignment = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_ASSIGNMENT':
      return action.assignment;
    case 'ADD_EDIT_PART_ID':
      return {
        ...state,
        partIds: [...state.partIds, action.partId],
      };
    case 'REMOVE_EDIT_PART_ID': {
      const { partIds } = state;
      return {
        ...state,
        partIds: partIds.slice(0, partIds.length - 1),
      }
    }
    default:
      return state;
  }
};

const editorIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADMIN_EDITOR_ID':
      return [...state, action.editorId];
    case 'REMOVE_ADMIN_EDITOR_ID':
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
};

const editors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ADMIN_EDITOR':
      return {
        ...state,
        [action.editorId]: action.editor,
      };
    case 'UNSET_ADMIN_EDITOR':
      const { [action.editorId]: {}, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

const parts = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_PART':
      return {
        ...state,
        [action.partId]: action.part,
      };
    case 'SET_EDIT_PARTS':
      return action.parts;
    case 'UNSET_EDIT_PART':
      const { [action.partId]: {}, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export { assignment, editors, parts };

export default combineReducers({
  assignment,
  editors,
  parts
});
