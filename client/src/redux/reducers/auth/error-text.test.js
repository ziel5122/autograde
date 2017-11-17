import reducer from './error-text';
import { CLEAR_STATE, SET_ERROR_TEXT } from '../../types/auth';

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
    const action = { type: CLEAR_STATE };
    const expectedState = '';

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_ERROR_TEXT', () => {
    const initialState = '';
    const errorText = 'there was an error';
    const action = {
      errorText,
      type: SET_ERROR_TEXT,
    };
    const expectedState = errorText;

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
