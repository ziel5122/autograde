import { SET_OPEN_TAB } from '../action-types/assignments';

const setOpenTab = (assignmentId, partId) => ({
  assignmentId,
  partId,
  type: SET_OPEN_TAB,
});

export { setOpenTab };
