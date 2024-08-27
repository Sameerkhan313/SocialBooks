// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeSia2DWLq516k3GUIzXappN9c9XSkPSI",
  authDomain: "social-media-236b5.firebaseapp.com",
  projectId: "social-media-236b5",
  storageBucket: "social-media-236b5.appspot.com",
  messagingSenderId: "849059837047",
  appId: "1:849059837047:web:8fb3454b6907b11cf2c272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { createUserWithEmailAndPassword, auth,signInWithEmailAndPassword }