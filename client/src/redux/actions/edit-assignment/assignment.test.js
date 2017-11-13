import * as actions from './assignment.js';
import * as types from '../../types/edit-assignment';

describe('editAssignment->assignment actions', () => {
  it('should create an action to add a partId', () => {
    const partId = '0123456789';
    const expectedAction = {
      partId,
      type: types.ADD_PART_ID,
    };

    const action = actions.addPartId(partId);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to clear the assignment', () => {
    const expectedAction = { type: types.CLEAR_ASSIGNMENT };

    const action = actions.clearAssignment();

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to remove a partId', () => {
    const expectedAction = { type: types.REMOVE_PART_ID };

    const action = actions.removePartId();

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set the assignment', () => {
     const assignment = {
       name: 'assignment 1',
       dueDate: '2017-08-08',
       visible: true,
     };
     const assignmentId = '0123456789';
     const expectedAction = {
       assignment,
       assignmentId,
       type: types.SET_ASSIGNMENT,
     };

     const action = actions.setAssignment(assignmentId, assignment);

     expect(action).toEqual(expectedAction);
   });

  it('should create an action to set the dueDate', () => {
    const dueDate = '2017-08-08';
    const expectedAction = {
      dueDate,
      type: types.SET_DUE_DATE,
    };

    const action = actions.setDueDate(dueDate);

    expect(action).toEqual(expectedAction);
  });

  it('should create an action to set the name', () => {
      const name = 'assignment 1';
      const expectedAction = {
        name,
        type: types.SET_NAME,
      };

      const action = actions.setName(name);

      expect(action).toEqual(expectedAction);
  });

  it('should create an action to set the visibility', () => {
      const visible = true;
      const expectedAction = {
        visible,
        type: types.SET_VISIBLE,
      };

      const action = actions.setVisible(visible);

      expect(action).toEqual(expectedAction);
  });
});
