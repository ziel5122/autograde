import {
  addPartId,
  clearAssignment,
  removePartId,
  setAssignment,
  setDueDate,
  setName,
  setVisible,
} from './assignment.js';
import {
  ADD_PART_ID,
  CLEAR_ASSIGNMENT,
  REMOVE_PART_ID,
  SET_ASSIGNMENT,
  SET_DUE_DATE,
  SET_NAME,
  SET_VISIBLE,
} from '../../types/edit-assignment';

describe('action to add a part id to assignment being edited', () => {
  it('should return an object with the partId and type to add a partId', () => {
    const partId = '0123456789';
    const type = ADD_PART_ID;

    const action = addPartId(partId);

    expect(action.partId).toBe(partId);
    expect(action.type).toBe(type);
  });
});

describe('action to clear assignment being edited', () => {
  it('should return an object with the type to clear assignment', () => {
    const type = CLEAR_ASSIGNMENT;

    const action = clearAssignment();

    expect(action.type).toBe(type);
  });
});

describe('action to remove a part id from assignment being edited', () => {
  it('should return an object with the type to remove a partI id', () => {
    const type = REMOVE_PART_ID;

    const action = removePartId();

    expect(action.type).toBe(type);
  });
});

describe('action to set the assignment to edit', () => {
  it(
    'should return an object with the assignment, assignment id, and type to set assignment',
     () => {
       const assignment = {
         name: 'assignment 1',
         dueDate: '2017-08-08',
         visible: true,
       };
       const assignmentId = '0123456789';
       const type = SET_ASSIGNMENT;

       const action = setAssignment(assignmentId, assignment);

       expect(action.assignment).toEqual(assignment);
       expect(action.assignmentId).toEqual(assignmentId);
       expect(action.type).toBe(SET_ASSIGNMENT);
     },
  );
});

describe('action to set due date of assignment being edited', () => {
  it(
    'should return an object with the due date, and type to set due date',
    () => {
      const dueDate = '2017-08-08';
      const type = SET_DUE_DATE;

      const action = setDueDate(dueDate);

      expect(action.dueDate).toBe(dueDate);
      expect(action.type).toBe(type);
    },
  );
});

describe('action to set due name of assignment being edited', () => {
  it('should return an object with the name, and type to set name', () => {
      const name = 'assignment 1';
      const type = SET_NAME;

      const action = setName(name);

      expect(action.name).toBe(name);
      expect(action.type).toBe(type);
  });
});

describe('action to set visibility of assignment being edited', () => {
  it(
    'should return an object with the visibility, and type to set visibility',
    () => {
        const visible = true;
        const type = SET_VISIBLE;

        const action = setVisible(visible);

        expect(action.visible).toBe(visible);
        expect(action.type).toBe(type);
    },
  );
});
