// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa2YJuvSEPcVoIFfFgadALDPqdQ3Dtay8",
  authDomain: "fir-auth-f2957.firebaseapp.com",
  projectId: "fir-auth-f2957",
  storageBucket: "fir-auth-f2957.appspot.com",
  messagingSenderId: "993951880046",
  appId: "1:993951880046:web:faefd36c39d84c3adc277f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app 