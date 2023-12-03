// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVybGgQr_Y2ACkPXle0TvURNcxS0BlNJE",
  authDomain: "stone-semiotics-299518.firebaseapp.com",
  projectId: "stone-semiotics-299518",
  storageBucket: "stone-semiotics-299518.appspot.com",
  messagingSenderId: "228884903981",
  appId: "1:228884903981:web:6f0571db13f00ddbff60a4",
  measurementId: "G-2GSCVYJF9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider= new GoogleAuthProvider();
export const db=getFirestore(app);