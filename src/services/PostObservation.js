import { db } from "../services/Firebase";

const postObservation = (observation) => {
  return db.ref('observations')
    .push(observation);
};

export default postObservation;
