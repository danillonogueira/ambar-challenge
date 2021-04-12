import { createStore } from 'redux';

const initialState = {
  hasObservation: false,
  observation: {},
  isLoading: false,
  observations: [],
  startedListeningToFb: false
};

const temperatureObservations = (state = initialState, action) => {
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
const Store = createStore(temperatureObservations);

export default Store;