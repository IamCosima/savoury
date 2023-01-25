import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAPmn1rAktdcWPQC23l2qqVozHe3TwV38",
  authDomain: "savoury-calculator.firebaseapp.com",
  projectId: "savoury-calculator",
  storageBucket: "savoury-calculator.appspot.com",
  messagingSenderId: "712812728200",
  appId: "1:712812728200:web:b1f32550bf1f4af3c7b43d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);