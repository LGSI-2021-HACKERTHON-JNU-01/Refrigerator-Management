import firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNmhrmL02JVBqvHj5MvatIT14v1OaPxbA',
  authDomain: 'refrigerator-manager-a9a63.firebaseapp.com',
  databaseURL:
    'https://refrigerator-manager-a9a63-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'refrigerator-manager-a9a63',
  storageBucket: 'refrigerator-manager-a9a63.appspot.com',
  messagingSenderId: '211607740677',
  appId: '1:211607740677:web:91d69d3ccaa6f69a70576c',
  measurementId: 'G-JZ3TYC67TL',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
