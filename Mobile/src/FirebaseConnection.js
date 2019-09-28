import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBOSkaDSU2z5PiCeirjFqkE7twHiSP4qJw",
    authDomain: "hackathon-f6b2d.firebaseapp.com",
    databaseURL: "https://hackathon-f6b2d.firebaseio.com",
    projectId: "hackathon-f6b2d",
    storageBucket: "",
    messagingSenderId: "353184284609",
    appId: "1:353184284609:web:3e4d89df8786fc05c7b940",
    measurementId: "G-3D2E1CLRGK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;