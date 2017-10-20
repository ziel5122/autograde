import { combineReducers } from 'redux';

const assignmentId = (state = '', action) => {
  switch (action.type) {
    case 'SET_ASSIGNMENT_ID':
      return action.assignmentId;
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

const partId = (state = '', action) => {
  switch (action.type) {
    case 'SET_PART_ID':
      return action.partId;
    default:
      return state;
  }
};

const partIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADMIN_PART_ID':
      return [...state, action.partId];
    case 'REMOVE_ADMIN_PART_ID':
      return state.slice(0, state.length - 1);
    case 'SET_ADMIN_PART_IDS':
      return action.partIds;
    default:
      return state;
  }
};

const parts = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ADMIN_PART':
      return {
        ...state,
        [action.partId]: action.part,
      };
    case 'SET_ADMIN_PARTS':
      return action.parts;
    case 'UNSET_ADMIN_PART':
      const { [action.partId]: {}, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export { assignmentId, editorIds, editors, partId, partIds, parts };

export default combineReducers({
  assignmentId,
  editorIds,
  editors,
  partId,
  partIds,
  parts
});
