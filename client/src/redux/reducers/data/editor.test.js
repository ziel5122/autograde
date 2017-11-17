import reducer from './editor';
import { setCode } from '../../actions/data';

describe('data->editor reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};

    const state = reducer(initialState, action);

    expect(state).toBeUndefined();
  });

  it('should handle SET_CODE', () => {
    const initialState = {
      filename: 'code.c',
      code: '',
      type: 'C',
      title: false,
    };
    const editorId = '1';
    const code = 'some code';
    const action = setCode(editorId, code);
    const expectedState = {
      code,
      filename: 'code.c',
      type: 'C',
      title: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
