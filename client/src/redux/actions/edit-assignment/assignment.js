import {
  ADD_PART_ID,
  CLEAR_ASSIGNMENT,
  REMOVE_PART_ID,
  SET_ASSIGNMENT,
  SET_DUE_DATE,
  SET_NAME,
  SET_VISIBLE,
} from '../../types/edit-assignment';

export const addPartId = partId => ({
  partId,
  type: ADD_PART_ID,
});

export const clearAssignment = () => ({
  type: CLEAR_ASSIGNMENT,
});

export const removePartId = () => ({
  type: REMOVE_PART_ID,
});

export const setAssignment = (assignmentId, assignment) => ({
  assignment,
  assignmentId,
  type: SET_ASSIGNMENT,
});

export const setDueDate = dueDate => ({
  dueDate,
  type: SET_DUE_DATE,
});

export const setName = name => ({
  name,
  type: SET_NAME,
});

export const setVisible = visible => ({
  visible,
  type: SET_VISIBLE,
});
