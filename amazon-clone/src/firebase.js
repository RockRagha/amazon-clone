import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDEb7tdOOax4stbc_gquK5cvsoQN1GM3E0",
  authDomain: "challenge-85c19.firebaseapp.com",
  databaseURL: "https://challenge-85c19.firebaseio.com",
  projectId: "challenge-85c19",
  storageBucket: "challenge-85c19.appspot.com",
  messagingSenderId: "223007840987",
  appId: "1:223007840987:web:16b006ff71021cb78b8afe",
  measurementId: "G-N675MXRYWJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
