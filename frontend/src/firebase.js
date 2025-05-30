import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5MRmvHKd2QiMusFudnNxRGzMw5vPF7s4",
    authDomain: "ai-interview-system-2b521.firebaseapp.com",
    projectId: "ai-interview-system-2b521",
    storageBucket: "ai-interview-system-2b521.firebasestorage.app",
    messagingSenderId: "885048758697",
    appId: "1:885048758697:web:cdb2fed182ccc53a1934b8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };