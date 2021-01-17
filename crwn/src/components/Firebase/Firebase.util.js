import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyDymfdpMoAHn3ZQiP1hANtNGcD5OqHDZGM",
    authDomain: "crown-clothing-464d4.firebaseapp.com",
    projectId: "crown-clothing-464d4",
    storageBucket: "crown-clothing-464d4.appspot.com",
    messagingSenderId: "169533326942",
    appId: "1:169533326942:web:3ff1903a87e8f24a1d16cf",
    measurementId: "G-11R29PFYP2"
  };
export const createUserProfileDocument = async(userAuth,additionalData) => {
  if(userAuth == null) 
  {
    return;
  }
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(snapshot.exists == false)
  {
    const {displayname, email} = userAuth;
    const createdAt = new Date();
    try{
     await userRef.set({displayname,
      email,
      createdAt,
      ...additionalData }) 
    }catch(error){
      console.log("error creating user",error.message);
    }
  }
  return userRef;
  console.log(firestore.doc)
}

  
 firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});
export const SignInWithGoogle = () => (auth.signInWithPopup(provider));
export default firebase;
