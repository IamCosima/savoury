
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyCd6vedAwhS4FkmBn2ezXkA_XDurTOEgSQ",
  authDomain: "savory-calculator.firebaseapp.com",
  projectId: "savory-calculator",
  storageBucket: "savory-calculator.appspot.com",
  messagingSenderId: "1023758708658",
  appId: "1:1023758708658:web:c89f011da7584be01f7eab",
  measurementId: "G-ZK5MJJLKL5",
  databaseURL: "https://savory-calculator-default-rtdb.europe-west1.firebasedatabase.app/",

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


createApp(App).mount('#app')
