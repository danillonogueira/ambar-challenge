import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootSaga from './Sagas';
import createSagaMiddleware from 'redux-saga';

const initialState = {
  hasObservation: false,
  observation: {},
  isLoading: false,
  observations: [],
  startedListeningToFb: false
};
const temperatures = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'STORE_FETCHED_OBSERVATION':
      return { 
        ...state,
        isLoading: false,
        hasObservation: true,
        observation: action.newObservation
      };
    case 'OBSERVATION_FETCHING_ERROR':
      return initialState;
    case 'STORE_OBSERVATIONS':
      const defaultNewState = {
        ...state,
        isLoading: false,
        observations: [...action.newObservations]
      };

      if (!state.startedListeningToFb) {
        return {
          ...defaultNewState,
          startedListeningToFb: true
        }
      }

      return defaultNewState;
    case 'RESET_FIREBASE_LISTENING':
      return {
        ...state,
        startedListeningToFb: false
      }
    default:
      return state;
  }
};
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
  combineReducers({ temperatures }), 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default Store;