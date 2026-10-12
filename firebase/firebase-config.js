
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBO6-Qq6Yh6E4ECx9BXGySqzC8J2zdHYzs",
  authDomain: "babbihar-23fcc.firebaseapp.com",
  databaseURL: "https://babbihar-23fcc-default-rtdb.firebaseio.com/",
  projectId: "babbihar-23fcc",
  storageBucket: "babbihar-23fcc.firebasestorage.app",
  messagingSenderId: "310810953638",
  appId: "1:310810953638:web:cbaafbf43b5cfd2dffb167",
  measurementId: "G-43J5L0K1MZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);