// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4HzE9ELFC3zPr9x80BoYlBjAneARv_lo",
  authDomain: "new-movies-app-764d0.firebaseapp.com",
  projectId: "new-movies-app-764d0",
  storageBucket: "new-movies-app-764d0.appspot.com",
  messagingSenderId: "526110387206",
  appId: "1:526110387206:web:3d195e53bac97c8d93a787",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

