import { db } from "../services/Firebase";

const postObservation = (observation) => db.ref('observations').push(observation);

export default postObservation;
