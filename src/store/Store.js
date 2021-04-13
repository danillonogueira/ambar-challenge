import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import temperatures from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
  combineReducers({ temperatures }), 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default Store;
