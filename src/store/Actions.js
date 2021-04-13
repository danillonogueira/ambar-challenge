export function storeObservations(payload) {
  return {
    type: 'ASYNC_STORE_OBSERVATIONS',
    payload
  }
}

export function startLoading() {
  return { type: 'FETCH_DATA' };
}
