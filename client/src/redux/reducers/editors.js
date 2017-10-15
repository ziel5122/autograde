const setCode = (state, code) => ({
  ...state,
  code,
});

const editors = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return {
        ...state,
        [action.id]: setCode(state[action.id], action.code),
      };
    default:
      return state;
  }
};

export default editors;
