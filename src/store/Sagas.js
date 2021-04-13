import { takeLatest, put, call, all } from 'redux-saga/effects';
import { showUpdateNotification } from './../helpers/Notifications';

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
      yield put({ 
        type: 'STORE_OBSERVATIONS', 
        newObservations 
      });
    } catch {
      yield put({ type: '' });
    }
  } else {
    yield put({ 
      type: 'STORE_OBSERVATIONS', 
      newObservations 
    });
  }
};

const root = function*() {
  yield all([
    takeLatest('ASYNC_STORE_OBSERVATIONS', storeData)
  ]);
};

export default root;
