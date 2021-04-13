import { database } from './Config';

const getDatabase = () => database.ref('observations');

export const postObservation = (observation) => getDatabase().push(observation);

export const listenToFirebase = (callback) => getDatabase().on('value', callback);

export const stopListeningToFirebase = () => getDatabase().off();
