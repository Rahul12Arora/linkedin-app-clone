import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8_RYr8tGYDgT79Cxb3ohBWKSqrja0l-s",
    authDomain: "linkedin-cl-fb975.firebaseapp.com",
    projectId: "linkedin-cl-fb975",
    storageBucket: "linkedin-cl-fb975.appspot.com",
    messagingSenderId: "997567366095",
    appId: "1:997567366095:web:8a29dcbc8e8bf36c85c8ba",
    measurementId: "G-GH0FWCV0JX"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export {db}