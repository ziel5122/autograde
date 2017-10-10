const setOpenTab = (state, openTab) => ({
  ...state,
  openTab,
});

const setVisible = (state, visible) => ({
  ...state,
  visible,
});

const assignments = (state = {}, action) => {
  switch (action.type) {
    case 'SET_OPEN_TAB':
      return {
        ...state,
        [action.id]: setOpenTab(state[action.id], action.partId),
      };
    case 'SET_VISIBLE':
      return {
        ...state,
        [action.id]: setVisible(state[action.id], action.visible),
      };
    default:
      return state;
  };
};

export default assignments;
