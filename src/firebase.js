import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyDJkq4hX6H5B815OoY83tUqCaqqJXyg0-U",
    authDomain: "react-contact-a751e.firebaseapp.com",
    projectId: "react-contact-a751e",
    storageBucket: "react-contact-a751e.appspot.com",
    messagingSenderId: "176957885607",
    appId: "1:176957885607:web:39e7ac13b23d859a3a9f82"
};

const fireDb= firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref()
