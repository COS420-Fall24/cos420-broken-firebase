// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "x",
  authDomain: "x",
  projectId: "x",
  storageBucket: "x",
  messagingSenderId: "x",
  appId: "x"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

if (window.location.hostname === "localhost"){
    connectFirestoreEmulator(db, 'localhost', 8080);
}

export {app, db};