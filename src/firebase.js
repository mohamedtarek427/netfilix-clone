// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyyrjehBmd5HoPoQwa7UdmDhL5AcNi7Rw",
  authDomain: "movieapp-65edd.firebaseapp.com",
  projectId: "movieapp-65edd",
  storageBucket: "movieapp-65edd.appspot.com",
  messagingSenderId: "664303009732",
  appId: "1:664303009732:web:32d6c527bbf6d7caa2ae91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
