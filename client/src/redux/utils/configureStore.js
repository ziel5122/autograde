import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import jsonData from '../../../../data';
import reducers from '../reducers';
import { loadState, saveState } from './localStorage';

const configureData = (data) => {
  const dataTemp = data;
  dataTemp.assignments = dataTemp.assignmentIds.reduce((
    newAssignments,
    assignmentId,
  ) => {
    const newAssignmentsTemp = newAssignments;
    newAssignmentsTemp[assignmentId] = {
      ...data.assignments[assignmentId],
      openTab: dataTemp.assignments[assignmentId].partIds[0],
    };
    return newAssignmentsTemp;
  }, {});

  return dataTemp;
};

const configureStore = () => {
  const persistedState = loadState();

  const initialState = persistedState || configureData(jsonData);

  const store = createStore(reducers, initialState);

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  console.log(store.getState());

  return store;
};

export default configureStore;
