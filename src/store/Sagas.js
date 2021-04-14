import { showUpdateNotification } from './../helpers/Notifications';
import { storeObservations } from './Actions';
import { call, put, takeLatest, all, cancel } from 'redux-saga/effects';

export const checkIfShouldUpdateData = () => {
  return new Promise((resolve, reject) => {
    showUpdateNotification(resolve, reject);
  });
};

export const storeData = function*(action) {
  const { newObservations, startedListeningToFirebase } = action.payload;

  if (startedListeningToFirebase) {
    try {
      yield call(checkIfShouldUpdateData);
      yield put(storeObservations(newObservations));
    } catch {
      yield cancel();
    }
  } else {
    yield put(storeObservations(newObservations));
  }
};

const root = function*() {
  yield all([
    takeLatest('ASYNC_STORE_OBSERVATIONS', storeData)
  ]);
};

export default root;
