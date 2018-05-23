import reducer from './assignment';
import * as actions from '../../actions/edit-assignment/assignment';

describe('editAssignment->assignment reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = {};

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle ADD_PART_ID', () => {
    const initialState = {
      assignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    };
    const partId = '0987654321';
    const action = actions.addPartId(partId);
    const expectedState = {
      ...initialState,
      partIds: [
        ...initialState.partIds,
        partId,
      ],
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle CLEAR_ASSIGNMENT', () => {
    const initialState = {
      assignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    };
    const action = actions.clearAssignment();
    const expectedState = {};

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle REMOVE_PART_ID', () => {
    const initialState = {
      asssignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
        '0987654321',
      ],
    };
    const action = actions.removePartId();
    const expectedState = {
      asssignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    }

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_ASSIGNMENT', () => {
    const initialState = {};
    const assignment = {
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    };
    const assignmentId = '1111111111';
    const action = actions.setAssignment(assignmentId, assignment);
    const expectedState = {
      ...assignment,
      assignmentId,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_DUE_DATE', () => {
    const initialState = {
      assignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    };
    const dueDate = '1992-08-08';
    const action = actions.setDueDate(dueDate);
    const expectedState = {
      ...initialState,
      dueDate,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_NAME', () => {
    const initialState = {
      assignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    };
    const name = 'assignment 2';
    const action = actions.setName(name);
    const expectedState = {
      ...initialState,
      name,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_VISIBLE', () => {
    const initialState = {
      assignmentId: '1111111111',
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      visible: true,
      partIds: [
        '1234567890',
      ],
    };
    const visible = false;
    const action = actions.setVisible(visible);
    const expectedState = {
      ...initialState,
      visible,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
