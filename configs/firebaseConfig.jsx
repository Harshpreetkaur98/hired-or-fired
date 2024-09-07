// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//harshpreet's firebase function


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: "headstarter-4b3e8.firebaseapp.com",
//   projectId: "headstarter-4b3e8",
//   storageBucket: "headstarter-4b3e8.appspot.com",
//   messagingSenderId: "313446801991",
//   appId: "1:313446801991:web:6df08c2d8891e80a6ac762",
//   measurementId: "G-6BSMVJ7Q3Y"
// };

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Karan's Firebase function

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hired-or-fired.firebaseapp.com",
  projectId: "hired-or-fired",
  storageBucket: "hired-or-fired.appspot.com",
  messagingSenderId: "773849683862",
  appId: "1:773849683862:web:f677bc8413899865e3afb7",
  measurementId: "G-FNMSYVKLEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);