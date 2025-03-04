// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnug3MnZ7gBu1vfOXm3rYbAiKjenWcNok",
  authDomain: "crowd-funding-a10.firebaseapp.com",
  projectId: "crowd-funding-a10",
  storageBucket: "crowd-funding-a10.firebasestorage.app",
  messagingSenderId: "17121626002",
  appId: "1:17121626002:web:ad0289ed125a882690234b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;