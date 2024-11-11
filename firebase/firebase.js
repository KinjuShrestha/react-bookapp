// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgDWCEAOTMYEGV--gkF0IxgtoiBZwgeg",
  authDomain: "info6127-1225099.firebaseapp.com",
  databaseURL: "https://info6127-1225099-default-rtdb.firebaseio.com",
  projectId: "info6127-1225099",
  storageBucket: "info6127-1225099.firebasestorage.app",
  messagingSenderId: "492070310368",
  appId: "1:492070310368:web:761444d2998b3c0f8d5b85",
  measurementId: "G-0SBGSZFH3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 
export { app, database };