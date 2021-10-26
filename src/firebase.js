// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXqri2mmwxU5yAsbihBJfXbpOr9WjnuAY",
  authDomain: "webapp-653ea.firebaseapp.com",
  databaseURL: "https://webapp-653ea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webapp-653ea",
  storageBucket: "webapp-653ea.appspot.com",
  messagingSenderId: "566890173783",
  appId: "1:566890173783:web:b239dee412325d0515da12",
  measurementId: "G-VY08ZKEMLY"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 getAnalytics();
const auth = getAuth();

export {auth}
