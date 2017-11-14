import { SET_CODE, SET_OPEN_TAB, TOGGLE_VISIBLE } from '../types/data';

export const setCode = (editorId, code) => ({
  code,
  editorId,
  type: SET_CODE,
});

export const setOpenTab = (assignmentId, partId) => ({
  assignmentId,
  partId,
  type: SET_OPEN_TAB,
});

export const toggleVisible = (assignmentId) => ({
  assignmentId,
  type: TOGGLE_VISIBLE,
});
