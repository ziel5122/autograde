const code = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CODE':
      const { name, index } = action;
      return {
        ...state,
        [name]: [
          ...state[name].slice(0, index),
          action.code,
          ...state[name].slice(index),
        ],
      };
    default:
      return state;
  }
};

export default code;
