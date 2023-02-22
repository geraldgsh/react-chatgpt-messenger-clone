import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY!,
	authDomain: "react-chatgpt-messenger-clone.firebaseapp.com",
	projectId: "react-chatgpt-messenger-clone",
	storageBucket: "react-chatgpt-messenger-clone.appspot.com",
	messagingSenderId: "553663980762",
	appId: "1:553663980762:web:3a6085f1410ee45048b1e3",
	measurementId: "G-K5W3PKEER1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
