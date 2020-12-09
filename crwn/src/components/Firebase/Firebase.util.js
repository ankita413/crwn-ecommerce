import firebase from 'firebase/app'; //to use firebase library
import 'firebase/firestore'; //for storage i.e. database
import 'firebase/auth'; //for authentication

const config = {
    apiKey: "AIzaSyDymfdpMoAHn3ZQiP1hANtNGcD5OqHDZGM",
    authDomain: "crown-clothing-464d4.firebaseapp.com",
    projectId: "crown-clothing-464d4",
    storageBucket: "crown-clothing-464d4.appspot.com",
    messagingSenderId: "169533326942",
    appId: "1:169533326942:web:3ff1903a87e8f24a1d16cf",
    measurementId: "G-11R29PFYP2"
  };
//initializeApp is built in fxn from firebase lib to initialize and create firebase app
firebase.initializeApp(config);
//to get access to authentication & storage in other files
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//GoogleAuthProvider() = represents google sign in authentication provider
const provider = new firebase.auth.GoogleAuthProvider();
//to open a pop up to ask user which of the google accounts to use for signin
provider.setCustomParameters({prompt : 'select_account'});
export const SignInWithGoogle = () => (auth.signInWithPopup(provider));
export default firebase;