// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, onSnapshot, doc, updateDoc, deleteDoc  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgdFVFgLAHuJLHtdGAmvxM9CUgwRZKfaM",
  authDomain: "cookbook-360bf.firebaseapp.com",
  projectId: "cookbook-360bf",
  storageBucket: "cookbook-360bf.appspot.com",
  messagingSenderId: "1046255068942",
  appId: "1:1046255068942:web:095d9722497a9c7143595f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, getDocs, addDoc, onSnapshot, doc, updateDoc, deleteDoc }