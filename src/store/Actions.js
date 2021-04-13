export const startFetching = () => ({ type: 'FETCH_DATA' });

export const stopFetching = () => ({ type: 'OBSERVATION_FETCHING_ERROR' });

export const storeObservation = (newObservation) => {
  return {
    type: 'STORE_FETCHED_OBSERVATION', 
    newObservation 
  }
};

export const storeObservations = (payload) => {
  return {
    type: 'ASYNC_STORE_OBSERVATIONS',
    payload
  };
};
