// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDLAQH2T7wQmgk1D8Aaxtzy8EHv8m6N6s",
    authDomain: "blog-app-98f62.firebaseapp.com",
    projectId: "blog-app-98f62",
    storageBucket: "blog-app-98f62.appspot.com",
    messagingSenderId: "909585907490",
    appId: "1:909585907490:web:32cb82addba4a6c200ef7b"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };