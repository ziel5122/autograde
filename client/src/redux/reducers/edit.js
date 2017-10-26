import { combineReducers } from 'redux';

const assignment = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EDIT_PART_ID':
      return {
        ...state,
        partIds: [...state.partIds, action.partId],
      };
    case 'CLEAR_EDIT_ASSIGNMENT':
      return {};
    case 'REMOVE_EDIT_PART_ID': {
      const { partIds } = state;
      return {
        ...state,
        partIds: partIds.slice(0, partIds.length - 1),
      };
    }
    case 'SET_EDIT_ASSIGNMENT':
      return {
        ...action.assignment,
        assignmentId: action.assignmentId,
      };
    case 'SET_EDIT_DUE_DATE':
      return {
        ...state,
        dueDate: action.dueDate,
      };
    case 'SET_EDIT_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_EDIT_VISIBLE':
      return {
        ...state,
        visible: action.visible,
      };
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

const editorFilename = (state, filename) => ({
  ...state,
  filename,
});

const editorFileType = (state, fileType) => ({
  ...state,
  fileType,
});

const editorTitle = (state, title) => ({
  ...state,
  title,
});

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
    case 'SET_EDIT_EDITOR_FILE_TYPE': {
      const { editorId } = action;
      return {
        ...state,
        [editorId]: editorFileType(state[editorId], action.fileType),
      };
    }
    case 'SET_EDIT_EDITOR_FILENAME': {
      const { editorId } = action;
      return {
        ...state,
        [editorId]: editorFilename(state[editorId], action.filename),
      };
    }
    case 'SET_EDIT_EDITOR_TITLE': {
      const { editorId } = action;
      return {
        ...state,
        [editorId]: editorTitle(state[editorId], action.title),
      };
    }
    default:
      return state;
  }
};

const part = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EDIT_EDITOR_ID':
      return {
        ...state,
        editorIds: [...state.editorIds, action.editorId],
      };
    case 'REMOVE_EDIT_EDITOR_ID': {
      const { editorIds } = state;
      return {
        ...state,
        editorIds: editorIds.slice(0, editorIds.length - 1),
      };
    }
    default:
      return state;
  }
};

const partAttempts = (state, attempts) => {
  return {
    ...state,
    attempts,
  };
};

const partName = (state, name) => {
  return {
    ...state,
    name,
  };
}

const parts = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EDIT_EDITOR_ID': {
      const { partId } = action;
      return {
        ...state,
        [partId]: part(state[partId], action),
      };
    }
    case 'REMOVE_EDIT_EDITOR_ID': {
      const { partId } = action;
      return {
        ...state,
        [partId]: part(state[partId], action),
      };
    }
    case 'SET_EDIT_PART':
      return {
        ...state,
        [action.partId]: action.part,
      };
    case 'SET_EDIT_PART_ATTEMPTS': {
      const { partId } = action;
      return {
        ...state,
        [partId]: partAttempts(state[partId], action.attempts),
      };
    }
    case 'SET_EDIT_PART_NAME': {
      const { partId } = action;
      return {
        ...state,
        [partId]: partName(state[partId], action.name),
      };
    }
    case 'SET_EDIT_PARTS':
      return action.parts;
    case 'UNSET_EDIT_PART':
      const { [action.partId]: {}, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export { assignment, editors, part, parts };

export default combineReducers({
  assignment,
  editors,
  parts
});
