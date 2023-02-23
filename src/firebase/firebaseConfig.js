
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2DbX-cXYQT8pttZWCzVw8Atyb_8EmWDk",
  authDomain: "devblog-vue.firebaseapp.com",
  projectId: "devblog-vue",
  storageBucket: "devblog-vue.appspot.com",
  messagingSenderId: "472173678565",
  appId: "1:472173678565:web:8f232dea3eace09466e90c"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth =getAuth(app)

export {db,storage,auth}