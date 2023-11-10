import firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {  } from "firebase/auth";
import 'firebase/firestore';
import config from "../config";

const app = firebase.initializeApp(config.firebase);
const analytics = getAnalytics(app);

const firestore = firebase.firestore();
const auth = firebase.auth();

if (window.location.hostname === "localhost" && process.env.REACT_APP_FIREBASE_ENV === "development") {
    console.log("USING EMULATOR");
    firestore.useEmulator("localhost", 8080);
}

export default firebase;
export { app, firestore, auth, analytics };