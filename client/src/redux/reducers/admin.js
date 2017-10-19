import { combineReducers } from 'redux';

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

const partIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADMIN_PART_ID':
      return [...state, action.partId];
    case 'REMOVE_ADMIN_PART_ID':
      return state.slice(0, state.length - 1);
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
    case 'UNSET_ADMIN_PART':
      const { [action.partId]: {}, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export { editorIds, editors, partIds, parts };

export default combineReducers({
  editorIds,
  editors,
  partIds,
  parts
});
