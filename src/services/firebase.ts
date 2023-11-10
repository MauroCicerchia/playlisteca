import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import config from "../config";

export const app = initializeApp(config.firebase);
export const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// if (window.location.hostname === "localhost" && process.env.REACT_APP_FIREBASE_ENV === "development") {
//     console.log("USING EMULATOR");
//     firestore.useEmulator("localhost", 8080);
// }
