import editor from './editor';

const editors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        [action.editorId]: editor(state[action.editorId], action),
      };
    default:
      return state;
  }
};

export default editors;
