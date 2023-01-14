/** Firebase */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjf-1dCcmh-q9NJrPh-69YVNZysZfW5bI",
  authDomain: "assignment-42713.firebaseapp.com",
  projectId: "assignment-42713",
  storageBucket: "assignment-42713.appspot.com",
  messagingSenderId: "241311710764",
  appId: "1:241311710764:web:f0c64b54022c323ad35b89",
  measurementId: "G-ZKGMKDKFWH",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, firebaseApp, analytics, firebaseConfig, provider };
