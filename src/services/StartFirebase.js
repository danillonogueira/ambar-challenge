import { db } from './Firebase';

const startFirebase = () => {
  return new Promise((resolve, reject) => {
    db.ref('observations')
      .on('value', (snapshot) => {
        if (snapshot) {
          resolve(snapshot);
        }

        reject('It was not possible to contact the database');
      }); 
  });
};

export default startFirebase;
