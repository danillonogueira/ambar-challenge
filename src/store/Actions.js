export function storeObservations(newObservations) {
  return {
    type: 'ASYNC_STORE_OBSERVATIONS',
    newObservations
  }
}

export function startLoading() {
  return { type: 'FETCH_DATA' };
}