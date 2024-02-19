import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDk_EPL4ZR3e7I0zX8MmjFRP9C7K0HwinE",
  authDomain: "music-2ae14.firebaseapp.com",
  projectId: "music-2ae14",
  storageBucket: "music-2ae14.appspot.com",
  //messagingSenderId: "674718313146",
  appId: "1:674718313146:web:bcb179fd419eb5ff6df083"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage
}
