import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAYqPlN9tZa_uThG4i0XlfrhhZgPQamqXc",
    authDomain: "clothing-db-fe814.firebaseapp.com",
    projectId: "clothing-db-fe814",
    storageBucket: "clothing-db-fe814.appspot.com",
    messagingSenderId: "801558947845",
    appId: "1:801558947845:web:16d22a2677bbac4d79146c",
    measurementId: "G-ZP352R4JH4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const SignInWithGoogle = () =>  auth.signInWithPopup(provider);

  export default firebase;