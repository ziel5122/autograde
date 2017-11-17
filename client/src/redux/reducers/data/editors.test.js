import reducer from './editors';
import { setCode } from '../../actions/data';

describe('data->editors reducer', () => {
  it('should return the initial state', () => {
    const initialState = undefined;
    const action = {};
    const expectedState = {};

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_CODE', () => {
    const initialState = {
      '1234567890': {
        title: false,
        filename: 'file.c',
        code: 'some c code',
        type: 'C',
      },
      '0987654321': {
        title: true,
        filename: 'file.h',
        code: 'some c code',
        type: 'C',
      },
    };
    const editorId = '0987654321';
    const code = 'come header code';
    const action = setCode(editorId, code);
    const expectedState = {
      ...initialState,
      [editorId]: {
        ...initialState[editorId],
        code,
      },
    };

    const state = reducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
