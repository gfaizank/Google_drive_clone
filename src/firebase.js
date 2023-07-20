import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnUzxAw2bszAPQog-Bs_a5KEYSB6jTijE",
    authDomain: "drive-clone-fizz.firebaseapp.com",
    projectId: "drive-clone-fizz",
    storageBucket: "drive-clone-fizz.appspot.com",
    messagingSenderId: "859784815691",
    appId: "1:859784815691:web:11d7d2505acd27aad119ce"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }