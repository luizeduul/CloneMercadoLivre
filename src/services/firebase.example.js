import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDn7RioJ_ZgvVzrp3Pw8FkeTpXtKdI_K-k",
  authDomain: "ml-clone-bf2a7.firebaseapp.com",
  projectId: "ml-clone-bf2a7",
  storageBucket: "ml-clone-bf2a7.appspot.com",
  messagingSenderId: "828649126970",
  appId: "1:828649126970:web:2e202714ff8b93f7dd8903"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
