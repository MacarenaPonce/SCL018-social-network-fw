// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDppt_7rgr6AB4AMdv_HZJwpap7_ehaUu8",
  authDomain: "concert-date-fw.firebaseapp.com",
  projectId: "concert-date-fw",
  storageBucket: "concert-date-fw.appspot.com",
  messagingSenderId: "63939955569",
  appId: "1:63939955569:web:049ee29844887516a804d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};