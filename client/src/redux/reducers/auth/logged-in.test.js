import reducer from './logged-in';
import { setLoggedIn } from '../../actions/auth';

describe('auth->loggedIn reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = false;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_LOGGED_IN', () => {
    const initialState = false;
    const loggedIn = true;
    const action = setLoggedIn(loggedIn);
    const expectedState = loggedIn;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
