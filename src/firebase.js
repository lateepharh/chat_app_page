import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA3wSryGAKHxNAEk7bHH2K5UuXwx7ghcQY",
    authDomain: "chatify-32cca.firebaseapp.com",
    projectId: "chatify-32cca",
    storageBucket: "chatify-32cca.appspot.com",
    messagingSenderId: "47983432908",
    appId: "1:47983432908:web:fe0ae01f1c20c7c0799e69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore();
