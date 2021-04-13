export const storeObservations = function(payload) {
  return {
    type: 'ASYNC_STORE_OBSERVATIONS',
    payload
  };
};

export const startFetching = function() {
  return { type: 'FETCH_DATA' };
};
