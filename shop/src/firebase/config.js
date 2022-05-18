import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy_lR1N2tIuHIUOIeJIGQ02HnwO3Auc4Q",
  authDomain: "fir-fc9df.firebaseapp.com",
  projectId: "fir-fc9df",
  storageBucket: "fir-fc9df.appspot.com",
  messagingSenderId: "745495091591",
  appId: "1:745495091591:web:33808aecf0a780803fdb22",
  measurementId: "G-JVWHKB51CQ"
};

//init firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
