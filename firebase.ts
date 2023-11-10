import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANdsjwlnRb2BDmSn87ydKjDLsHosyIBoo",
  authDomain: "chatbot-404508.firebaseapp.com",
  projectId: "chatbot-404508",
  storageBucket: "chatbot-404508.appspot.com",
  messagingSenderId: "924806333355",
  appId: "1:924806333355:web:190a43bea29d487a9088ee",
  measurementId: "G-6TF4NYBRB3",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
