// firebaseConfig.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = { 
  databaseURL: "https://uic-campus-app-default-rtdb.firebaseio.com/"
};

// Prevent duplicate apps
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const database = getDatabase(app);
