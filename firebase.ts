// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "551613031787",
//   appId: "",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// ↑Reactの場合。Firebaseからコピペしただけ
// ↓Next.jsの場合

// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chatgpt-messenger-580f7.firebaseapp.com",
  projectId: "chatgpt-messenger-580f7",
  storageBucket: "chatgpt-messenger-580f7.appspot.com",
  messagingSenderId: "551613031787",
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
