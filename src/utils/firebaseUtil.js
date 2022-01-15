import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseUtil = firebase.initializeApp({
  apiKey: "AIzaSyC8xZKi-3Rrm_cAXrc0BXX6kNL6qgQW-uA",
  authDomain: "fire-blog-new.firebaseapp.com",
  projectId: "fire-blog-new",
  storageBucket: "fire-blog-new.appspot.com",
  messagingSenderId: "754065950153",
  appId: "1:754065950153:web:d0f15bbea0411a2863d418",
});
export default firebaseUtil;

export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider()