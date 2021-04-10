import { createStore } from 'redux';

const initialState = {
  // history: [],
  // dataHasChanged: false,
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
    // case 'STORE_FETCHED_HISTORY':
    // case 'DATA_HAS_CHANGED':
    default:
      return state;
  }
};
const store = createStore(temperatures);

export default store;