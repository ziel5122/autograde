import reducer from './password';
import { clearState, setPassword } from '../../actions/auth';

describe('auth->password reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle CLEAR_STATE', () => {
    const initialState = 'password';
    const action = clearState();
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_PASSWORD', () => {
    const initialState = '';
    const password = 'password';
    const action = setPassword(password);
    const expectedState = 'password';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
