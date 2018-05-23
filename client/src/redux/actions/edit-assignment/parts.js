import {
  ADD_EDITOR_ID,
  REMOVE_EDITOR_ID,
  SET_PART,
  SET_PARTS,
  UNSET_PART,
} from '../../types/edit-assignment';

export const addEditorId = (partId, editorId) => ({
  editorId,
  partId,
  type: ADD_EDITOR_ID,
});

export const removeEditorId = (partId) => ({
  partId,
  type: REMOVE_EDITOR_ID,
});

export const setPart = (partId, part) => ({
  part,
  partId,
  type: SET_PART
});

export const setParts = parts => ({
  parts,
  type: SET_PARTS,
});

export const unsetPart = (partId) => ({
  partId,
  type: UNSET_PART,
});
