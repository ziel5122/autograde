import { SET_EDITOR, SET_EDITORS, UNSET_EDITOR } from '../../types/edit-assignment';

export const setEditor = (editorId, editor) => ({
  editor,
  editorId,
  type: SET_EDITOR,
});

export const setEditors = editors => ({
  editors,
  type: SET_EDITORS,
});

export const unsetEditor = (editorId) => ({
  editorId,
  type: UNSET_EDITOR,
});
