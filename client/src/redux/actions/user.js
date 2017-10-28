import { SET_PART } from '../action-types/user';

const setUserPart = (partId, part) => ({
  part,
  partId,
  type: SET_PART,
});

export { setUserPart };
