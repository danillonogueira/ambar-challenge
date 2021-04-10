import { createStore } from 'redux';

const initialState = {
  hasObservation: false,
  observation: {},
  isLoading: false
};

const temperatures = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_OBSERVATION':
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
    default:
      return state;
  }
};
const store = createStore(temperatures);

export default store;