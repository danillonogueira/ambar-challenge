import { createStore } from 'redux';

const initialState = {
  hasObservation: false,
  observation: {}
};

const temperatures = function(state = initialState, action) {
  switch (action.type) {
    case 'STORE_OBSERVATION':
      return { 
        ...state,
        hasObservation: true,
        observation: action.newObservation
      };
    // case 'STORE_HISTORY':
    //   return {
    //     ...state
    //   }
    // case 'DATA_HAS_CHANGED':
    //   return {
    //     ...state
    //   }
    default:
      return state;
  }
}

const store = createStore(temperatures);

export default store;