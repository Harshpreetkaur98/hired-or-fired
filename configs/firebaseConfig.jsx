// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "headstarter-4b3e8.firebaseapp.com",
  projectId: "headstarter-4b3e8",
  storageBucket: "headstarter-4b3e8.appspot.com",
  messagingSenderId: "313446801991",
  appId: "1:313446801991:web:6df08c2d8891e80a6ac762",
  measurementId: "G-6BSMVJ7Q3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);