import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAyxr5AwbLj0yBMLu6ldS6qWYuNPBGsv5M',
  authDomain: 'expenditure-e346a.firebaseapp.com',
  projectId: 'expenditure-e346a',
  storageBucket: 'expenditure-e346a.appspot.com',
  messagingSenderId: '97710371987',
  appId: '1:97710371987:web:22a133572a1b2b2b4c0966',
  measurementId: 'G-30Y3GSV99F',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
