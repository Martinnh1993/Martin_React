// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq4GOMaY-UZ17BF0dEs8Sp-v84EpBeuDE",
  authDomain: "globetrottersdiary-8d5e6.firebaseapp.com",
  projectId: "globetrottersdiary-8d5e6",
  storageBucket: "globetrottersdiary-8d5e6.appspot.com",
  messagingSenderId: "679858150718",
  appId: "1:679858150718:web:746929fcadb8b9cd7de06f",
  measurementId: "G-8Z2C1GPQGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, getDocs, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, where }