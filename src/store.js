import { createStore } from 'redux';

const initialState = {
  hasObservation: false,
  observation: {},
  isLoading: false
};
const temperatures = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        isLoading: true
      }
    case 'STORE_OBSERVATION':
      return { 
        ...state,
        isLoading: false,
        hasObservation: true,
        observation: action.newObservation
      };
    default:
      return state;
  }
};
const store = createStore(temperatures);

export default store;