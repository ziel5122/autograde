import deepFreeze from 'deep-freeze';

import { editorIds, editors, partIds, parts } from './admin';

describe('editorIds', () => {
  it('should append an editorId without mutation', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_ADMIN_EDITOR_ID',
      editorId: 1,
    };
    const stateAfter = [1];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(editorIds(stateBefore, action)).toEqual(stateAfter);
  });

  it('should remove the last editorId without mutation', () => {
    const stateBefore = [1];
    const action = {
      type: 'REMOVE_ADMIN_EDITOR_ID',
    };
    const stateAfter = [];

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(editorIds(stateBefore, action)).toEqual(stateAfter);
  });
});

describe('editors', () => {
  it('should add an editor object without mutation', () => {
    const stateBefore = {};
    const action = {
      type: 'SET_ADMIN_EDITOR',
      editorId: '1',
      editor: {
        filename: 'editor1',
        type: 'C',
        title: true,
      },
    };
    const stateAfter = {
      1: {
        filename: 'editor1',
        type: 'C',
        title: true,
      },
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(editors(stateBefore, action)).toEqual(stateAfter);
  });

  it('should update an existing editor object without mutation', () => {
    const stateBefore = {
      1: {
        filename: 'editor1',
        type: 'C',
        title: true,
      },
    };
    const action = {
      type: 'SET_ADMIN_EDITOR',
      editorId: '1',
      editor: {
        filename: 'editorOne',
        type: 'bash',
        title: false,
      },
    };
    const stateAfter = {
      1: {
        filename: 'editorOne',
        type: 'bash',
        title: false,
      },
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(editors(stateBefore, action)).toEqual(stateAfter);
  });

  it('should delete an editor object without mutation', () => {
    const stateBefore = {
      1: {
        filename: 'editor1',
        type: 'C',
        title: true,
      },
    };
    const action = {
      type: 'UNSET_ADMIN_EDITOR',
      editorId: '1',
    };
    const stateAfter = {};

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(editors(stateBefore, action)).toEqual(stateAfter);
  });
});

describe('partIds', () => {
  it('should append a partId without mutation', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_ADMIN_PART_ID',
      partId: 1,
    };
    const stateAfter = [1];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(partIds(stateBefore, action)).toEqual(stateAfter);
  });

  it('should remove the last partId without mutation', () => {
    const stateBefore = [1];
    const action = {
      type: 'REMOVE_ADMIN_PART_ID',
    };
    const stateAfter = [];

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(partIds(stateBefore, action)).toEqual(stateAfter);
  });
});

describe('parts', () => {
  it('should add a part object without mutation', () => {
    const stateBefore = {};
    const action = {
      type: 'SET_ADMIN_PART',
      partId: '1',
      part: {
        name: 'part1',
        attempts: 5,
      },
    };
    const stateAfter = {
      1: {
        name: 'part1',
        attempts: 5,
      },
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(parts(stateBefore, action)).toEqual(stateAfter);
  });

  it('should update an existing part object without mutation', () => {
    const stateBefore = {
      1: {
        name: 'part1',
        attempts: 5,
      },
    };
    const action = {
      type: 'SET_ADMIN_PART',
      partId: '1',
      part: {
        name: 'partOne',
        attempts: 55,
      },
    };
    const stateAfter = {
      1: {
        name: 'partOne',
        attempts: 55,
      },
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(parts(stateBefore, action)).toEqual(stateAfter);
  });

  it('should delete a part object without mutation', () => {
    const stateBefore = {
      1: {
        name: 'part1',
        attempts: 5,
      },
    };
    const action = {
      type: 'UNSET_ADMIN_PART',
      partId: '1',
    };
    const stateAfter = {};

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(parts(stateBefore, action)).toEqual(stateAfter);
  });
});
