import * as actions from './editors';
import * as types from '../../types/edit-assignment';

describe('editAssignment->editors actions', () => {
  it('should create an action to set an editor', () => {
      const editor = {
        filename: 'file.c',
        title: false,
        type: 'c'
      };
      const editorId = '0123456789';
      const expectedAction = {
        editor,
        editorId,
        type: types.SET_EDITOR,
      };

      const action = actions.setEditor(editorId, editor);

      expect(action).toEqual(expectedAction);
  });

  it('should create an action to set all editors', () => {
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
    const expectedAction = {
      editors,
      type: types.SET_EDITORS,
    };

    const action = actions.setEditors(editors);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to unset an editor', () => {
    const editorId = '0123456789';
    const expectedAction = {
      editorId,
      type: types.UNSET_EDITOR,
    };

    const action = actions.unsetEditor(editorId);

    expect(action).toEqual(expectedAction);
  });
});
