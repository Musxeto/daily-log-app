// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtpGvNN7sSlIToM6axRD_wu-vgBKVagSg",
  authDomain: "daily-log-tracker.firebaseapp.com",
  projectId: "daily-log-tracker",
  storageBucket: "daily-log-tracker.firebasestorage.app",
  messagingSenderId: "159334420567",
  appId: "1:159334420567:web:8b647a55c82f27fa3e9312",
  measurementId: "G-89GGBLTH0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);