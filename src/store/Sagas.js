import { takeLatest, put, call, all } from 'redux-saga/effects';

// Watcher saga
export function* storeData(action) {
  const { newObservations } = action;

  yield put({ type: 'STORE_OBSERVATIONS', newObservations });
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_STORE_OBSERVATIONS', storeData)
  ]);
}