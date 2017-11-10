import { setEditor, setEditors, unsetEditor } from './editors';
import { SET_EDITOR, SET_EDITORS, UNSET_EDITOR } from '../../types/edit-assignment';

describe('action to set an editor of the part being edited', () => {
  it(
    'should return an object with the editor, editorId, and type to set an editor',
    () => {
        const editor = {
          filename: 'file.c',
          title: false,
          type: 'c'
        };
        const editorId = '0123456789';
        const type = SET_EDITOR;

        const action = setEditor(editorId, editor);

        expect(action.editorId).toBe(editorId);
        expect(action.type).toBe(type);
    },
  );
});

describe('action to set editors of the assignment being edited', () => {
  it('should return an object with the editors and type to set editors', () => {
    const editors = {
      '0123456789': {
        filename: 'file.c',
        title: true,
        type: 'C'
      },
      '9876543210': {
        filename: 'file.h',
        title: true,
        type: 'C',
      },
    };
    const type = SET_EDITORS;

    const action = setEditors(editors);

    expect(action.editors).toEqual(editors);
    expect(action.type).toBe(type);
  });
});

describe('action to unset an editor of the part being edited', () => {
  it(
    'should return an object with the editorId given and type to unset an editor',
    () => {
      const editorId = '0123456789';
      const type = UNSET_EDITOR;

      const action = unsetEditor(editorId);

      expect(action.editorId).toBe(editorId);
      expect(action.type).toBe(type);
    }
  );
});
