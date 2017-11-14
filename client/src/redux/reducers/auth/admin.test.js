import reducer from './admin';
import { setAdmin } from '../../actions/auth';

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
    const action = setAdmin(admin);
    const expectedState = true;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
