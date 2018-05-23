import { SET_PART } from '../types/user';

const setUserPart = (partId, part) => ({
  part,
  partId,
  type: SET_PART,
});

export { setUserPart };
