// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN9chJlC44frkWjYkgz_1k0AzJ32YE8EE",
  authDomain: "flashcard-saas-4239e.firebaseapp.com",
  projectId: "flashcard-saas-4239e",
  storageBucket: "flashcard-saas-4239e.appspot.com",
  messagingSenderId: "880643533380",
  appId: "1:880643533380:web:34a0e80df406453ee96a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;