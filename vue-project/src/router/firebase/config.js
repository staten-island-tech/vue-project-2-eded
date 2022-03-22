import { initalizeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3T0rJKTV-RAchrQyJTStEVFuUiAmzfcA",
  authDomain: "vuex-7ab25.firebaseapp.com",
  projectId: "vuex-7ab25",
  storageBucket: "vuex-7ab25.appspot.com",
  messagingSenderId: "119635356926",
  appId: "1:119635356926:web:32371f4ba4f25d817d49af",
  measurementId: "G-VLVFC70TD8",
};
initalizeApp(firebaseConfig);
const auth = getAuth();
export { auth };
