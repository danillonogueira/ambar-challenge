import { takeLatest, put, call, all } from 'redux-saga/effects';
// import { showSuccessNotification } from './../helpers/Notifications';
import { notification, Button } from 'antd';


const showUpdateNotification = () => {
  return new Promise((resolve, reject) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button 
        type="primary" 
        size="small" 
        onClick={() => {
          resolve(true)
          notification.close(key);
        }}
      >
        Atualizar
      </Button>
    );

    notification.warning({
      placement: 'topRight',
      message: 'Existem informações novas. Deseja atualizar?',
      key,
      btn,
      duration: 0,
      onClose: () => reject(false)
    });
  });
};

export function* storeData(action) {
  const { newObservations, startedListeningToFirebase } = action.payload;

  if (startedListeningToFirebase) {
    try {
      yield call(showUpdateNotification);

      yield put({ type: 'STORE_OBSERVATIONS', newObservations });
    } catch {
      yield put({ type: '' });
    }
  } else {
    yield put({ type: 'STORE_OBSERVATIONS', newObservations });
  }
}

export default function* root() {

  yield all([
    takeLatest('ASYNC_STORE_OBSERVATIONS', storeData)
  ]);
}