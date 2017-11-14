import reducer from './username';
import { clearState, setUsername } from '../../actions/auth';

describe('auth->username reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle CLEAR_STATE', () => {
    const initialState = 'username';
    const action = clearState();
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_USERNAME', () => {
    const initialState = '';
    const username = 'username';
    const action = setUsername(username);
    const expectedState = 'username';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
