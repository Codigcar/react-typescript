import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCoq_10pWoOeZTeGVHRIVlPhAeywkrP1ZY",
//     authDomain: "journal-react-app-d4636.firebaseapp.com",
//     projectId: "journal-react-app-d4636",
//     storageBucket: "journal-react-app-d4636.appspot.com",
//     messagingSenderId: "500576210173",
//     appId: "1:500576210173:web:5fcdb3a6f5de0e37cc0294"
//   };

var firebaseConfig = {
  apiKey: "AIzaSyCYLZ2BK_b2FFjqMHdPOtlbUYvPglXCd7U",
  authDomain: "test-nosirve.firebaseapp.com",
  databaseURL: "https://test-nosirve-default-rtdb.firebaseio.com",
  projectId: "test-nosirve",
  storageBucket: "test-nosirve.appspot.com",
  messagingSenderId: "590334822955",
  appId: "1:590334822955:web:bc587dd7ca67e69b8df86e"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}


// export {firebase};