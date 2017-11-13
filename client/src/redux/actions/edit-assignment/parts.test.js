import * as actions from './parts';
import * as types from '../../types/edit-assignment';

describe('editAssignment->parts actions', () => {
  it('should create an action to add an editorId', () => {
    const editorId = '12334567890';
    const partId = '0987654321';
    const expectedAction = {
      editorId,
      partId,
      type: types.ADD_EDITOR_ID,
    };

    const action = actions.addEditorId(partId, editorId);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to remove an editorId', () => {
    const partId = '0987654321';
    const expectedAction = {
      partId,
      type: types.REMOVE_EDITOR_ID
    };

    const action = actions.removeEditorId(partId);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set a part', () => {
    const part = {
      name: 'part 1',
      attempts: 5,
    };
    const partId = '1234567890';
    const expectedAction = {
      part,
      partId,
      type: types.SET_PART,
    };

    const action = actions.setPart(partId, part);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set all parts', () => {
    const parts = {
      '1234567890': {
        name: 'part 1',
        attempts: 5
      },
      '0987654321': {
        name: 'part 2',
        attempts: 2,
      },
    };
    const expectedAction = {
      parts,
      type: types.SET_PARTS,
    };

    const action = actions.setParts(parts);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to unset a part', () => {
    const partId = '1234567890';
    const expectedAction = {
      partId,
      type: types.UNSET_PART,
    };

    const action = actions.unsetPart(partId);

    expect(action).toEqual(expectedAction);
  });
});
