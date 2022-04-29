
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBYO9_rn-Ax0bi88QCLvp7z1NqK2EY6vqY",
  authDomain: "ab-electronics-9bf41.firebaseapp.com",
  projectId: "ab-electronics-9bf41",
  storageBucket: "ab-electronics-9bf41.appspot.com",
  messagingSenderId: "1067448633978",
  appId: "1:1067448633978:web:22eec7ca1ab942fc8689c3"
  /* apiKey:process.env.API_KEY,
  authDomain:process.env.API_AUTH,
  projectId:process.env.API_ID,
  storageBucket:process.env.API_STORAGE,
  messagingSenderId:process.env.API_SENDER_ID,
  appId:process.env.API_APP_ID */
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;