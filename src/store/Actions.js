export const startFetching = function() {
  return { type: 'FETCH_DATA' };
};

export const stopFetching = function() {
  return { type: 'OBSERVATION_FETCHING_ERROR' };
};

export const storeObservation = function(newObservation) {
  return {
    type: 'STORE_FETCHED_OBSERVATION', 
    newObservation 
  }
};

export const storeObservations = function(payload) {
  return {
    type: 'ASYNC_STORE_OBSERVATIONS',
    payload
  };
};
