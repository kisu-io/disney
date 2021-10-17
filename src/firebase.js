import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCvPhDlr00PxzROvAbuwpyjsY2hkv--kxU",
    authDomain: "phimmoi-fb5ce.firebaseapp.com",
    projectId: "phimmoi-fb5ce",
    storageBucket: "phimmoi-fb5ce.appspot.com",
    messagingSenderId: "327350478890",
    appId: "1:327350478890:web:27c80da552baa295203b53"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;