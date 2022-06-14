import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP2LTfvpGra0XFu0ctfBWpNGEQUQSokY0",
    authDomain: "foodhood-final.firebaseapp.com",
    projectId: "foodhood-final",
    storageBucket: "foodhood-final.appspot.com",
    messagingSenderId: "286793710955",
    appId: "1:286793710955:web:149bb3a41ed98ebe10202e",
    measurementId: "G-DRMLCZRN1Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;