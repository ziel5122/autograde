import {
  ADD_EDITOR_ID,
  REMOVE_EDITOR_ID,
  SET_ATTEMPTS,
  SET_NAME,
  SET_PART,
  SET_PARTS,
  UNSET_PART,
} from '../../types/parts';

const part = (state, action) => {
  switch (action.type) {
    case ADD_EDITOR_ID:
      console.log(state);
      return {
        ...state,
        editorIds: [...state.editorIds, action.editorId],
      };
    case REMOVE_EDITOR_ID: {
      const { editorIds } = state;
      return {
        ...state,
        editorIds: editorIds.slice(0, editorIds.length - 1),
      };
    }
    case SET_ATTEMPTS:
      return {
        ...state,
        attempts: action.attempts,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

const parts = (state = {}, action) => {
  switch (action.type) {
    case ADD_EDITOR_ID: {
      const { partId } = action;
      return {
        ...state,
        [partId]: part(state[partId], action),
      };
    }
    case REMOVE_EDITOR_ID: {
      const { partId } = action;
      return {
        ...state,
        [partId]: part(state[partId], action),
      };
    }
    case SET_ATTEMPTS: {
      const { partId } = action;
      return {
        ...state,
        [partId]: part(state[partId], action),
      };
    }
    case SET_NAME: {
      const { partId } = action;
      return {
        ...state,
        [partId]: part(state[partId], action),
      };
    }
    case SET_PART:
      return {
        ...state,
        [action.partId]: action.part,
      };
    case SET_PARTS:
      return action.parts;
    case UNSET_PART:
      const { [action.partId]: {}, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default parts;
