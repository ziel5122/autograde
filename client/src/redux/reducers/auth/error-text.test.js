import reducer from './error-text';
import { clearState, setErrorText } from '../../actions/auth';

describe('auth->errorText reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('shoulc handle CLEAR_STATE', () => {
    const initialState = 'there was an error';
    const action = clearState();
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_ERROR_TEXT', () => {
    const initialState = '';
    const errorText = 'there was an error';
    const action = setErrorText(errorText);
    const expectedState = errorText;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
