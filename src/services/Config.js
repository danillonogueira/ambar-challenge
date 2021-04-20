import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore'; 
import 'firebase/messaging';
import 'firebase/functions'; 

const { REACT_APP_FIREBASE_KEY, REACT_APP_DATABASE_URL } = process.env;
const config = {
  apiKey: REACT_APP_FIREBASE_KEY,
  databaseURL: REACT_APP_DATABASE_URL
};

firebase.initializeApp(config);

export const database = firebase.database();
