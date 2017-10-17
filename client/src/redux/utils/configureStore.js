import jwt from 'jsonwebtoken';
import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import jsonData from '../../../../data';
import reducers from '../reducers';
import { loadState, saveState } from './sessionStorage';

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

  const token = sessionStorage.getItem('jwt');
  if (token) {
    const privilege = jwt.decode(token).privilege;
    initialState.login = {
      admin: (privilege === 'admin'),
      loggedIn: true,
    };
  }

  console.log(initialState);

  const store = createStore(reducers, initialState);

  store.subscribe(throttle(() => {
    const state = {...store.getState()};
    delete state.login;
    saveState(state);
  }, 1000));

  return store;
};

export default configureStore;
