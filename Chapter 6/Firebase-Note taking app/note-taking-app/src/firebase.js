// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUEMxkgGOCXep__P0BXj-OLhti1fgErbw",
  authDomain: "note-taking-app-b3d81.firebaseapp.com",
  projectId: "note-taking-app-b3d81",
  storageBucket: "note-taking-app-b3d81.firebasestorage.app",
  messagingSenderId: "1042923027200",
  appId: "1:1042923027200:web:a3694b87df481f056751e5",
   databaseURL: "https://note-taking-app-b3d81-default-rtdb.firebaseio.com/",
  measurementId: "G-L6SJFY2H8G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);