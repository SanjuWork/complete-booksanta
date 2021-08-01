import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBH7JAIe_VcIqOKH_fE-93mTUY3aDe6-lM",
  authDomain: "book-santa-app-300604.firebaseapp.com",
  databaseURL: "https://book-santa-app-300604.firebaseio.com",
  projectId: "book-santa-app-300604",
  storageBucket: "book-santa-app-300604.appspot.com",
  messagingSenderId: "999470593631",
  appId: "1:999470593631:web:3c3a5728d1b0dad4eb4dea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
