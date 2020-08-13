import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ_NTuvlX40ysZ9toQVqIG_kKpzNl4-4g",
  authDomain: "react-projects-82ad9.firebaseapp.com",
  databaseURL: "https://react-projects-82ad9.firebaseio.com",
  projectId: "react-projects-82ad9",
  storageBucket: "react-projects-82ad9.appspot.com",
  messagingSenderId: "490616833461",
  appId: "1:490616833461:web:3e3af17133327832cb45fc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();

export default db;
