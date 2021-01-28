import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { userRef } from "react";

const config = {
  apiKey: "AIzaSyCKEPLj8tFPM4H9SQc1OJvYoyDzsNo13Fs",
  authDomain: "brain-clothing.firebaseapp.com",
  projectId: "brain-clothing",
  storageBucket: "brain-clothing.appspot.com",
  messagingSenderId: "463004581040",
  appId: "1:463004581040:web:8d274ec6869ec245838f75",
  measurementId: "G-MF0E4C41RD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
