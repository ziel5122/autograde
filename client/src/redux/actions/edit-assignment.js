import {
  ADD_EDITOR_ID,
  ADD_PART_ID,
  CLEAR_ASSIGNMENT,
  REMOVE_EDITOR_ID,
  REMOVE_PART_ID,
  SET_ASSIGNMENT,
  SET_EDITOR,
  SET_PART,
  SET_PARTS,
  UNSET_EDITOR,
  UNSET_PART,
} from '../types/edit-assignment';

const addEditorId = (partId, editorId) => ({
  editorId,
  partId,
  type: ADD_EDITOR_ID,
});

const addPartId = partId => ({
  partId,
  type: ADD_PART_ID,
});

const clearAssignment = () => ({
  type: CLEAR_ASSIGNMENT,
});

const removeEditorId = () => ({
  type: REMOVE_EDITOR_ID,
});

const removePartId = () => ({
  type: REMOVE_PART_ID,
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

const setPart = (partId, part) => ({
  part,
  partId,
  type: SET_PART
});

const setParts = parts => ({
  parts,
  type: SET_PARTS,
});

const unsetEditor = (editorId) => ({
  editorId,
  type: UNSET_EDITOR,
});

const unsetPart = (partId) => ({
  partId,
  type: UNSET_PART,
});

export {
  addEditorId,
  addPartId,
  clearAssignment,
  removeEditorId,
  removePartId,
  setAssignment,
  setEditor,
  setPart,
  setParts,
  unsetEditor,
  unsetPart,
};
