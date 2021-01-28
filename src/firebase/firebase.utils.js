import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKEPLj8tFPM4H9SQc1OJvYoyDzsNo13Fs",
  authDomain: "brain-clothing.firebaseapp.com",
  projectId: "brain-clothing",
  storageBucket: "brain-clothing.appspot.com",
  messagingSenderId: "463004581040",
  appId: "1:463004581040:web:8d274ec6869ec245838f75",
  measurementId: "G-MF0E4C41RD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
