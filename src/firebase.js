import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const firestore = firebase.firestore();

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = getStorage(app);
export const auth = firebase.auth();

export default app;
