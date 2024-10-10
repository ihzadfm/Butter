// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fHwUyNOQgdj5v6IgvEYgm2PMGL3YMcE",
  authDomain: "test1-7d300.firebaseapp.com",
  projectId: "test1-7d300",
  storageBucket: "test1-7d300.appspot.com",
  messagingSenderId: "1025966350855",
  appId: "1:1025966350855:web:8f2a6ea949f3e7061180a2",
  measurementId: "G-ZB0BK2LRDM"
};

const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore(app);
export default db;
