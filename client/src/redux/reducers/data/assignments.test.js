import { setOpenTab, toggleVisible } from '../../actions/data';
import reducer from './assignments';

describe('data->assignments reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = {};

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_OPEN_TAB', () => {
    const initialState = {
      '1111111111': {
        name: 'assignment 1',
        classCode: 'class 1',
        dueDate: '2017-08-08',
        partIds: [
          '1234567890',
          '0987654321',
        ],
        openTab: '1234567890',
        visible: true,
      },
      '2222222222': {
        name: 'assignment 2',
        classCode: 'class 2',
        dueDate: '2017-08-08',
        partIds: [
          '0987654321',
          '1234567890',
        ],
        openTab: '0987654321',
        visible: false,
      },
    };
    const assignmentId = '1111111111';
    const openTab = '0987654321';
    const action = setOpenTab(assignmentId, openTab);
    const expectedState = {
      ...initialState,
      [assignmentId]: {
        ...initialState[assignmentId],
        openTab,
      },
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle TOGGLE_VISIBLE', () => {
    const initialState = {
      '1111111111': {
        name: 'assignment 1',
        classCode: 'class 1',
        dueDate: '2017-08-08',
        partIds: [
          '1234567890',
          '0987654321',
        ],
        openTab: '1234567890',
        visible: true,
      },
      '2222222222': {
        name: 'assignment 2',
        classCode: 'class 2',
        dueDate: '2017-08-08',
        partIds: [
          '0987654321',
          '1234567890',
        ],
        openTab: '0987654321',
        visible: false,
      },
    };
    const assignmentId = '2222222222';
    const visible = true;
    const action = toggleVisible(assignmentId);
    const expectedState = {
      ...initialState,
      [assignmentId]: {
        ...initialState[assignmentId],
        visible,
      },
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
