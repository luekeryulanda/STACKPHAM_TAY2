// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDOTXdE1QAhIcjAFN-ww9MXoLTAqycu1lY",
  authDomain: "linkproject-6e6d7.firebaseapp.com",
  projectId: "linkproject-6e6d7",
  storageBucket: "linkproject-6e6d7.appspot.com",
  messagingSenderId: "879986884408",
  appId: "1:879986884408:web:03b7e4fd8ad6c5e1418bcd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
