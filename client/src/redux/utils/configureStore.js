import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import data from '../../../../data';
import reducers from '../reducers';
import { loadState, saveState } from './localStorage';

const configureData = (data) => {
  data.assignments = data.assignmentIds.reduce((
    newAssignments,
    assignmentId,
  ) => {
    newAssignments[assignmentId] = {
      ...initialState.assignments[assignmentId],
      openTab: initialState.assignments[assignmentId].partIds[0],
    };
    return newAssignments;
  }, {});

  return data;
};

const configureStore = () => {
  const persistedState = loadState();

  const initialState = persistedState || configureData(data);

  const store = createStore(reducers, initialState);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  console.log(store.getState());

  return store;
};

export default configureStore;
