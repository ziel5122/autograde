import { SET_ATTEMPTS } from '../types/parts';

const setAttempts = (partId, attempts) => ({
  attempts,
  partId,
  type: SET_ATTEMPTS,
});

export { setAttempts };
