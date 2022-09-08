// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOSSewn80UlTbmIqf0XzwXGBLZkkFi0as",
  authDomain: "chit-chat-25342.firebaseapp.com",
  projectId: "chit-chat-25342",
  storageBucket: "chit-chat-25342.appspot.com",
  messagingSenderId: "800309790547",
  appId: "1:800309790547:web:7fab3c779b48fdd2e003a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()