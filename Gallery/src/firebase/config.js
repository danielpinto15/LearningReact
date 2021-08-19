import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx2x_nnkv1OwLN3dD23pckwSoFm0KIV7k",
    authDomain: "fotosapp-6da36.firebaseapp.com",
    projectId: "fotosapp-6da36",
    storageBucket: "fotosapp-6da36.appspot.com",
    messagingSenderId: "697794619820",
    appId: "1:697794619820:web:3f8dd38931a80c85ff3209"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };