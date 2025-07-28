import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, serverTimestamp, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDV8nAAJqFVtxAZMvPTS7aXli3-XE7SNtE",
  authDomain: "uic-campus-app.firebaseapp.com",
  databaseURL: "https://uic-campus-app-default-rtdb.firebaseio.com",
  projectId: "uic-campus-app",
  storageBucket: "uic-campus-app.firebasestorage.app",
  messagingSenderId: "334819310965",
  appId: "1:334819310965:web:bd8b26cdf1a52e9180273c",
  measurementId: "G-E939RF26YH",
  databaseURL: "https://uic-campus-app-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export function writeMessage(groupID, name, message, imageURL, title) {
  set(ref(db, 'messages/' + groupID), {
    userName: name,
    userMessage: message,
    profilePic: imageURL,
    userTitle: title,
    timeStamp: serverTimestamp()
  })
}

