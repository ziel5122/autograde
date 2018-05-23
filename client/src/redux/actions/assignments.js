import { SET_OPEN_TAB } from '../types/data';

const setOpenTab = (assignmentId, partId) => ({
  assignmentId,
  partId,
  type: SET_OPEN_TAB,
});

export { setOpenTab };
