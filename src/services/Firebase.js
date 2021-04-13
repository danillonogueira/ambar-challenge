import { database } from './Config';

const getDatabase = () => database.ref('observations');

export const postObservation = (observation) => {
  return getDatabase()
    .push(observation);
};

export const listenToFirebase = (callback) => {
  return getDatabase()
    .on('value', callback);
};

export const stopListeningToFirebase = () => {
  return getDatabase()
    .off();
};
