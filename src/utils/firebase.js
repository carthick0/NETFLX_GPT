// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh3cdFqzIlFUxoZ1w64zHKjTyE5Ka9osc",
  authDomain: "netflixgpt-faeb1.firebaseapp.com",
  projectId: "netflixgpt-faeb1",
  storageBucket: "netflixgpt-faeb1.firebasestorage.app",
  messagingSenderId: "638015571687",
  appId: "1:638015571687:web:fa11a2bf33946e0e53c442",
  measurementId: "G-24K6BW55FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();