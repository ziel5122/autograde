import {
  SET_EDITOR,
  SET_FILE_TYPE,
  SET_FILENAME,
  SET_TITLE,
  UNSET_EDITOR,
} from '../../types/editors';

const editor = (state, action) => {
  switch (action.type) {
    case SET_FILE_TYPE:
      return {
        ...state,
        fileType: action.fileType,
      };
    case SET_FILENAME:
      return {
        ...state,
        filename: action.filename,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

const editors = (state = {}, action) => {
  switch (action.type) {
    case SET_EDITOR: {
      const { editor, editorId } = action;
      return {
        ...state,
        [editorId]: editor,
      };
    }
    case SET_FILE_TYPE: {
      const { editorId } = action;
      return {
        ...state,
        [editorId]: editor(state[editorId], action),
      };
    }
    case SET_FILENAME: {
      const { editorId } = action;
      return {
        ...state,
        [editorId]: editor(state[editorId], action),
      };
    }
    case SET_TITLE: {
      const { editorId } = action;
      return {
        ...state,
        [editorId]: editor(state[editorId], action),
      };
    }
    case UNSET_EDITOR:
      const { [action.editorId]: editor, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default editors;
