
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBO6-Qq6Yh6E4ECx9BXGySqzC8J2zdHYzs",
  authDomain: "babbihar-23fcc.firebaseapp.com",
  projectId: "babbihar-23fcc",
  storageBucket: "babbihar-23fcc.firebasestorage.app",
  messagingSenderId: "310810953638",
  appId: "1:310810953638:web:cbaafbf43b5cfd2dffb167",
  measurementId: "G-43J5L0K1MZ",
  databaseURL: "https://babbihar-23fcc-default-rtdb.firebaseio.com/"
};

const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
