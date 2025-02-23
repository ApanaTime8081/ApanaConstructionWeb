// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHxBZAd9IcZG2R_y5TtLlSnSm_qh05o8c",
  authDomain: "apanaconstruction-953b1.firebaseapp.com",
  projectId: "apanaconstruction-953b1",
  storageBucket: "apanaconstruction-953b1.firebasestorage.app",
  messagingSenderId: "590137040490",
  appId: "1:590137040490:web:25847a6f5e2dc7bc1b3413",
  measurementId: "G-WH3BP1T7DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FireBase = getFirestore(app);

export { FireBase };
