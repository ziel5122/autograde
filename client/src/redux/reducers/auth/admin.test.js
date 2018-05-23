import reducer from './admin';
import { SET_ADMIN } from '../../types/auth';

describe('auth->admin reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = false;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_ADMIN', () => {
    const initialState = false;
    const admin = true;
    const action = {
      admin,
      type: SET_ADMIN,
    };
    const expectedState = true;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
