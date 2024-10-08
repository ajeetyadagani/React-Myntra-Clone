
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBnTbsylpMX2-94-Cj7sWntCiuZZBrB71E",
  authDomain: "login-form-dc768.firebaseapp.com",
  projectId: "login-form-dc768",
  storageBucket: "login-form-dc768.appspot.com",
  messagingSenderId: "488416263982",
  appId: "1:488416263982:web:d0407f9a4eb2fa0a1684bf"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export const database=getFirestore(app)