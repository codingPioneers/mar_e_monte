// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3r7k4DudSjlOY_rbDbZh-_3O2xGfEu9k",
  authDomain: "leo-mar-monte.firebaseapp.com",
  projectId: "leo-mar-monte",
  storageBucket: "leo-mar-monte.appspot.com",
  messagingSenderId: "309169326859",
  appId: "1:309169326859:web:020f3244880474d1d9300e",
  measurementId: "G-EZJ1BH8WNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);