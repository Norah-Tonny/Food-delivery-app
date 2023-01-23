// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPfmkwH1zJO_JsXSoOXx-SaabVQ_3aO5g",
  authDomain: "norah-s-fast-food-delivery.firebaseapp.com",
  projectId: "norah-s-fast-food-delivery",
  storageBucket: "norah-s-fast-food-delivery.appspot.com",
  messagingSenderId: "875725502662",
  appId: "1:875725502662:web:87a4d3e9af19712ea1ffc7",
  measurementId: "G-9RLMF3W6X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
