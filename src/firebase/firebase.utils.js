import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDOjpN54JNfeXNB8GEZ3f8qIqvj90RGOvk",
  authDomain: "crwn-db-davidcloudobi.firebaseapp.com",
  databaseURL: "https://crwn-db-davidcloudobi.firebaseio.com",
  projectId: "crwn-db-davidcloudobi",
  storageBucket: "crwn-db-davidcloudobi.appspot.com",
  messagingSenderId: "676096218728",
  appId: "1:676096218728:web:208bbe5442a85560f40ddd",
  measurementId: "G-VRCPNHLX63"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

