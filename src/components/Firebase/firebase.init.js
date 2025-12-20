// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw5EXJvZOLfPWaIBiz4WQQAOsjae2U3a4",
    authDomain: "dragon-news-auth-1bc0f.firebaseapp.com",
    projectId: "dragon-news-auth-1bc0f",
    storageBucket: "dragon-news-auth-1bc0f.firebasestorage.app",
    messagingSenderId: "719728688182",
    appId: "1:719728688182:web:b6b27114370d3fb3fcec97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);