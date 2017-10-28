import {
  ADD_EDITOR_ID,
  CLEAR_ASSIGNMENT,
  SET_ASSIGNMENT
} from '../types/edit-assignment';

const addEditorId = (editorId) => ({
  editorId,
  type: ADD_EDITOR_ID,
});

const clearAssignment = () => ({
  type: CLEAR_ASSIGNMENT,
});

const removeEditorId = () => ({
  type: REMOVE_EDITOR_ID,
});

const setAssignment = (assignmentId, assignment) => ({
  assignment,
  assignmentId,
  type: SET_ASSIGNMENT,
});

const setEditor = (editorId, editor) => ({
  editor,
  editorId,
  type: SET_EDITOR,
});

const unsetEditor = (editorId) => ({
  editorId,
  type: UNSET_EDITOR,
});

export {
  addEditorId,
  clearAssignment,
  removeEditorId,
  setAssignment,
  setEditor,
  unsetEditor,
};
