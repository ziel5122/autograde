import { createStore } from 'redux';

import { addPartId, clearAssignment, removePartId } from '../../actions/edit-assignment/assignment';
import emptyState from '../../utils/emptyState';
import reducers from '..';

describe('tests for the editAssignment->assignment reducer', () => {
  it('should add a part id to the end of the partIds array', () => {
    const initialState = {
      editAssignment: {
        assignment: {
          partIds: ['1234567890'],
        },
      },
    };
    const store = createStore(reducers, initialState);
    const partId = '0987654321';
    const finalState = {
      ...emptyState,
      editAssignment: {
        ...emptyState.editAssignment,
        assignment: {
          partIds: [
            '1234567890',
            '0987654321',
          ],
        },
      },
    };

    store.dispatch(addPartId(partId));
    const state = store.getState();

    expect(state).toEqual(finalState);
  });

  it('should set the assignment state to an empty object', () => {
    const initialState = {
      editAssignment: {
        assignment: {
          dueDate: '2017-08-08',
          name: 'assignment 1',
          partIds: ['1234567890'],
          visible: true,
        },
      },
    };
    const store = createStore(reducers, initialState);

    store.dispatch(clearAssignment());
    const state = store.getState();

    expect(state).toEqual(emptyState);
  });

  it('should remove a part id from the end of the partIds array', () => {
    const initialState = {
      editAssignment: {
        assignment: {
          partIds: ['1234567890', '0987654321'],
        },
      },
    };
    const store = createStore(reducers, initialState);
    const finalState = {
      ...emptyState,
      editAssignment: {
        ...emptyState.editAssignment,
        assignment: {
          partIds: [
            '1234567890',
          ],
        },
      },
    };

    store.dispatch(removePartId());
    const state = store.getState();

    expect(state).toEqual(finalState);
  });
});
