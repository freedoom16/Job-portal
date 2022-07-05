// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgDCxPoWd3ZFYt0aRxe8gVy07TbczjV0I",
  authDomain: "jobforall-b850a.firebaseapp.com",
  projectId: "jobforall-b850a",
  storageBucket: "jobforall-b850a.appspot.com",
  messagingSenderId: "436392454463",
  appId: "1:436392454463:web:0bffbe3e84f40d02668b8a",
  measurementId: "G-F92022CT5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
