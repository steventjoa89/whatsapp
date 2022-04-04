// import firebase, { getApp, getApps, initializeApp } from "firebase/app";
// // import { initializeApp, getApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: "AIzaSyBBpRnpUrau_KJEunEycBj5piY1FfQrDL0",
//   authDomain: "whatsapp-ae772.firebaseapp.com",
//   projectId: "whatsapp-ae772",
//   storageBucket: "whatsapp-ae772.appspot.com",
//   messagingSenderId: "137128249309",
//   appId: "1:137128249309:web:b19ec37edf547dfb2a5834",
// };

// // console.log(firebase.app.length)

// // const app = !firebase.app.length
// //   ? firebase.initializeApp(firebaseConfig)
// //   : firebase.app();

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const db = app.firestore();
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBBpRnpUrau_KJEunEycBj5piY1FfQrDL0",
  authDomain: "whatsapp-ae772.firebaseapp.com",
  projectId: "whatsapp-ae772",
  storageBucket: "whatsapp-ae772.appspot.com",
  messagingSenderId: "137128249309",
  appId: "1:137128249309:web:b19ec37edf547dfb2a5834",
};

console.log(firebase.apps.length);
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
