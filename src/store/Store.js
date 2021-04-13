import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootSaga from './Sagas';
import createSagaMiddleware from 'redux-saga';
import temperatures from './Reducers';

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
  combineReducers({ temperatures }), 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default Store;
