import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDV8nAAJqFVtxAZMvPTS7aXli3-XE7SNtE",
  authDomain: "uic-campus-app.firebaseapp.com",
  databaseURL: "https://uic-campus-app-default-rtdb.firebaseio.com",
  projectId: "uic-campus-app",
  storageBucket: "uic-campus-app.firebasestorage.app",
  messagingSenderId: "334819310965",
  appId: "1:334819310965:web:bd8b26cdf1a52e9180273c",
  measurementId: "G-E939RF26YH"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);
export { auth };
export default app;
