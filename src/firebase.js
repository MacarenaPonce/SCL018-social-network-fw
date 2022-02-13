// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC4cMWrL6nYLOSt1gEXK1IHgavAWYmr6D4",
    authDomain: "concert-date-react.firebaseapp.com",
    projectId: "concert-date-react",
    storageBucket: "concert-date-react.appspot.com",
    messagingSenderId: "901286048346",
    appId: "1:901286048346:web:164b5417dbff6e7d5dde63",
    measurementId: "G-3PGQE8Q5WK"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  //const analytics = getAnalytics(app);
  export { firebase, auth, db } ;
  
  
