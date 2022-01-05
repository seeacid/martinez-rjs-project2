import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCprly4p_ckKwT_hO9HsgyNGU_zf608tNk",
    authDomain: "stardead-clothes.firebaseapp.com",
    projectId: "stardead-clothes",
    storageBucket: "stardead-clothes.appspot.com",
    messagingSenderId: "318833318246",
    appId: "1:318833318246:web:aa7a051db0c028ceac50a7",
    measurementId: "G-JPFHCNEC9B"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
