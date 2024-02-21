import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyACpvGAz5O8Uwyd5ByWSrGF6MdrBZ_eRnE",
    authDomain: "chats-96169.firebaseapp.com",
    projectId: "chats-96169",
    storageBucket: "chats-96169.appspot.com",
    messagingSenderId: "15622391678",
    appId: "1:15622391678:web:9362135bd65486e491952f"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore(app);
