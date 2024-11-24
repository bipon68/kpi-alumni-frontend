import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

// VITE_FIREBASE_API_KEY = ""
// VITE_FIREBASE_AUTH_DOMAIN = ""
// VITE_FIREBASE_PROJECT_ID = ""
// VITE_FIREBASE_STORAGE_BUCKET = ""
// VITE_FIREBASE_MESSAGING_SENDER_ID = ""
// VITE_FIREBASE_APP_ID = ""
const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { firebaseAuth, firebaseApp, googleProvider, githubProvider };
