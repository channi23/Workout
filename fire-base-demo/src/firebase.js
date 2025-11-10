// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4xeJQFod8OMx3bc7MT324iFAnP0dYPyc",
  authDomain: "student-management-syste-a4955.firebaseapp.com",
  databaseURL: "https://student-management-syste-a4955-default-rtdb.firebaseio.com",
  projectId: "student-management-syste-a4955",
  storageBucket: "student-management-syste-a4955.firebasestorage.app",
  messagingSenderId: "150215359597",
  appId: "1:150215359597:web:9710ff9c1b43b6bddf9364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);