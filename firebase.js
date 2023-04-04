import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCuR2LEZ5ZpPILjWGMbnhfivD2W8IiZufg",
    authDomain: "facebook-41078.firebaseapp.com",
    projectId: "facebook-41078",
    storageBucket: "facebook-41078.appspot.com",
    messagingSenderId: "146045252447",
    appId: "1:146045252447:web:cd15bdd1f3e100bba03cea"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export const db = app.firestore();
  export const storage = firebase.storage()