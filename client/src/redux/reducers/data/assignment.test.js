import { setOpenTab, toggleVisible } from '../../actions/data';
import reducer from './assignment';

describe('data->assignment reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};

    const state = reducer(initialState, action);

    expect(state).toBeUndefined();
  });

  it('should handle SET_OPEN_TAB', () => {
    const initialState = {
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      partIds: [
        '1234567890',
        '0987654321',
      ],
      openTab: '1234567890',
      visible: true,
    };
    const assignmentId = '1111111111';
    const partId = '0987654321';
    const action = setOpenTab(assignmentId, partId);
    const expectedState = {
      ...initialState,
      openTab: partId,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle TOGGLE_VISIBLE', () => {
    const initialState = {
      name: 'assignment 1',
      classCode: 'class 1',
      dueDate: '2017-08-08',
      partIds: [
        '1234567890',
        '0987654321',
      ],
      openTab: '1234567890',
      visible: false,
    };
    const assignmentId = '1111111111';
    const action = toggleVisible(assignmentId);
    const expectedState = {
      ...initialState,
      visible: true,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
