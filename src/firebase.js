import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCICxc4AE_cvVHvFjXzJnM-uSvjePr29sA",
    authDomain: "clone-1ef4f.firebaseapp.com",
    projectId: "clone-1ef4f",
    storageBucket: "clone-1ef4f.appspot.com",
    messagingSenderId: "27972736253",
    appId: "1:27972736253:web:61f15c7f04c455047c9a94",
    measurementId: "G-F3BRZQ51BG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };