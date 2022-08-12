// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7RD6CIl7YRZOWzNYY-DU4lEfD5JfmsO8",
  authDomain: "miniblog-179cf.firebaseapp.com",
  projectId: "miniblog-179cf",
  storageBucket: "miniblog-179cf.appspot.com",
  messagingSenderId: "998347745123",
  appId: "1:998347745123:web:71859b9c52b977d9cd9556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize DB FireStore
const db = getFirestore(app);

export { db };