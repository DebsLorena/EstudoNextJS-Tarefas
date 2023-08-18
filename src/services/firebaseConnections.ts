
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmPBho6vW_ZXvHr6W1Sj-MgLJZysZ0XT8",
  authDomain: "tarefasnext-b00f3.firebaseapp.com",
  projectId: "tarefasnext-b00f3",
  storageBucket: "tarefasnext-b00f3.appspot.com",
  messagingSenderId: "431786927669",
  appId: "1:431786927669:web:cc88aa153786dbac48737c"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }