import { SET_OPEN_TAB, TOGGLE_VISIBLE } from '../../types/data';

export default (state, action) => {
  switch (action.type) {
    case SET_OPEN_TAB:
      return {
        ...state,
        openTab: action.partId,
      };
    case TOGGLE_VISIBLE:
      return {
        ...state,
        visible: !state.visible,
      }
    default:
      return state;
  }
};
