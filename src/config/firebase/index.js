import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/filestore';

var firebaseConfig = {
    apiKey: "AIzaSyBIEvVT1Rp-v-NyMlJgo5C5okgTafMWIE4",
    authDomain: "simple-notes-firebase-1c199.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-1c199.firebaseio.com",
    projectId: "simple-notes-firebase-1c199",
    storageBucket: "",
    messagingSenderId: "353353419136",
    appId: "1:353353419136:web:83da1e6a8a7d561eb89965"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase