import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const config = {
    apiKey: "AIzaSyBdWbAEKZrAjfIbv6j1ORIVTSZ7ohiZ76c",
    authDomain: "dashboard-cc429.firebaseapp.com",
    databaseURL: "https://dashboard-cc429.firebaseio.com",
    projectId: "dashboard-cc429",
    storageBucket: "dashboard-cc429.appspot.com",
    messagingSenderId: "977524609819",
    appId: "1:977524609819:web:c8796ec3778a37263f39be"
};

// Initialize Firebase

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })
export default firebase;

