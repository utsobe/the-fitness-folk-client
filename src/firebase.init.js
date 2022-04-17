// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVeevKAM8jGm9KnvjImvLXMdu8pTgY690",
    authDomain: "the-fitness-folk.firebaseapp.com",
    projectId: "the-fitness-folk",
    storageBucket: "the-fitness-folk.appspot.com",
    messagingSenderId: "486930765473",
    appId: "1:486930765473:web:d179a11b6d69275d9002e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;