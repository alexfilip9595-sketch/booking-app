import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSy................",
  authDomain: "detailly-c9ae0.firebaseapp.com",
  projectId: "detailly-c9ae0",
  storageBucket: "detailly-c9ae0.firebasestorage.app",
  messagingSenderId: "363321931367",
  appId: "1:363321931367:web:b5005b0757f1a8e35bc6c2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);