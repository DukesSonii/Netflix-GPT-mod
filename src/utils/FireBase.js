// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwVlmXIPMDBxmonoANy8EOHfNrz9GQVNI",
  authDomain: "dukeflixgpt.firebaseapp.com",
  projectId: "dukeflixgpt",
  storageBucket: "dukeflixgpt.appspot.com",
  messagingSenderId: "489396123417",
  appId: "1:489396123417:web:870534afcf27dc8a2e7788",
  measurementId: "G-LPFNC37KL1",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
