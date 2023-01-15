// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzBI4OIqLAL4A57wnKtti8W3RyohvfD1A",
  authDomain: "toy-website-e9473.firebaseapp.com",
  projectId: "toy-website-e9473",
  storageBucket: "toy-website-e9473.appspot.com",
  messagingSenderId: "1071416186598",
  appId: "1:1071416186598:web:1b2cab86bd49f03f064d27",
  measurementId: "G-95GF6N2BSC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export { db };
