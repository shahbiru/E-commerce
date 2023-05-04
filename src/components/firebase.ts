import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";
import {
    GoogleAuthProvider,
  } from "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAM37j-om4WcFcNyN6-0UtcjFLez4Su-_A",
    authDomain: "e-commerce-9552a.firebaseapp.com",
    projectId: "e-commerce-9552a",
    storageBucket: "e-commerce-9552a.appspot.com",
    messagingSenderId: "731798404107",
    appId: "1:731798404107:web:aec3d9027783fd7ac69b0e",
    measurementId: "G-3X1X1ED2GP"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()
export const google = new GoogleAuthProvider();
export const storage = getStorage(firebaseApp);

export { db, auth }