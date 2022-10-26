// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0z88hKX74eCIhkJ04pWQ_M_q9Zh2QqE0",
    authDomain: "alpha-coders.firebaseapp.com",
    projectId: "alpha-coders",
    storageBucket: "alpha-coders.appspot.com",
    messagingSenderId: "644804592200",
    appId: "1:644804592200:web:1539f3c378448ae82a4e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;