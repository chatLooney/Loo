import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdHNLudL_ej9fJJ7-OHalqzILdEhkjFHc",
  authDomain: "looitranslate-67907.firebaseapp.com",
  projectId: "looitranslate-67907",
  storageBucket: "looitranslate-67907.firebasestorage.app",
  messagingSenderId: "984389629959",
  appId: "1:984389629959:web:769694f463ff7b2c7252a2",
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
