import Rebase from 're-base'
import firebase from "firebase";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyCSo4kJ6dcTbwCYPQAUV6RB7Ibh8az34fs",
        authDomain: "catch-of-day-fb5b8.firebaseapp.com",
        databaseURL: "https://catch-of-day-fb5b8-default-rtdb.firebaseio.com",
        projectId: "catch-of-day-fb5b8",
        storageBucket: "catch-of-day-fb5b8.appspot.com",
        messagingSenderId: "146897551401",
        appId: "1:146897551401:web:feca8d5d7002718d305c38"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(app.database())

// This is a named export
export {app}
// This is a default export
export default base
