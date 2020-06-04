import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBH6Vi5JVecQjReDEbszVG4x6r_j9-WQDs",
    authDomain: "cycscanner-f7659.firebaseapp.com",
    databaseURL: "https://cycscanner-f7659.firebaseio.com",
    projectId: "cycscanner-f7659",
    storageBucket: "cycscanner-f7659.appspot.com",
    messagingSenderId: "506511302589",
    appId: "1:506511302589:web:3408dcc96a77de8cc5fcd4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();