import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDKPHOHiwGJCoQDR3dpeT6DfP8xrP4_j-U",
  authDomain: "ambar-challenge-c8c7b.firebaseapp.com",
  databaseURL: "https://ambar-challenge-c8c7b-default-rtdb.firebaseio.com",
  projectId: "ambar-challenge-c8c7b",
  storageBucket: "ambar-challenge-c8c7b.appspot.com",
  messagingSenderId: "454474398913",
  appId: "1:454474398913:web:b3647c7ff764270b93e840"
};

firebase.initializeApp(config);

export const database = firebase.database();
