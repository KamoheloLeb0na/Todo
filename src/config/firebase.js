import firebase from 'firebase/compat/app'; // Update the import statement
import 'firebase/compat/firestore'; // Update the import statement

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdqPl4ZglMLUgQ_9S0Zv4qCEsXOjnQEew",
  authDomain: "todo-b38ae.firebaseapp.com",
  projectId: "todo-b38ae",
  storageBucket: "todo-b38ae.appspot.com",
  messagingSenderId: "911224040615",
  appId: "1:911224040615:web:889d0792fe6d9d7b88bf82",
  measurementId: "G-15D232YPSR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore instance
const firestore = firebase.firestore();

export { firestore };
