// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPTEtXBD5iRw7jVNoFJzlv-D6djUH4_Fw",
  authDomain: "sovv-10d4b.firebaseapp.com",
  projectId: "sovv-10d4b",
  storageBucket: "sovv-10d4b.firebasestorage.app",
  messagingSenderId: "911712807309",
  appId: "1:911712807309:web:ef5467944cdcb887c075c4",
  measurementId: "G-SWV40Y85DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully!");
