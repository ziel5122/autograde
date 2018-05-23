import reducer from './assignment-ids';

describe('data->assignmentids reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = [];

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
