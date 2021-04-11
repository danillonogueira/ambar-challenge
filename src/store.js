import { createStore } from 'redux';

const initialState = {
  hasObservation: false,
  observation: {},
  isLoading: false,
  observations: []
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
      return {
        ...state,
        isLoading: false,
        observations: [...action.newObservations]
      }
    default:
      return state;
  }
};
const store = createStore(temperatures);

export default store;