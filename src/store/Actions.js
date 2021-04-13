export function storeObservations(payload) {
  return {
    type: 'ASYNC_STORE_OBSERVATIONS',
    payload
  }
}

export function startFetching() {
  return { type: 'FETCH_DATA' };
}
