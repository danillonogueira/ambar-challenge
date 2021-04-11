import { db } from "../services/Firebase";

const getObservations = () => {
  return db.ref('observations')
    .on('value', snapshot => snapshot.val());
};

export default getObservations;
