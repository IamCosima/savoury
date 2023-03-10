
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBAPmn1rAktdcWPQC23l2qqVozHe3TwV38",
  authDomain: "savoury-calculator.firebaseapp.com",
  projectId: "savoury-calculator",
  storageBucket: "savoury-calculator.appspot.com",
  messagingSenderId: "712812728200",
  appId: "1:712812728200:web:b1f32550bf1f4af3c7b43d",
  databaseURL : "https://savoury-calculator-default-rtdb.firebaseio.com/",

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

export {database}
createApp(App).mount('#app')
