import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbOgHSK3uMN7O5X_isVIY2C7WtjOtq9zw",
  authDomain: "favour-dunsin.firebaseapp.com",
  projectId: "favour-dunsin",
  storageBucket: "favour-dunsin.appspot.com",
  messagingSenderId: "812778365735",
  appId: "1:812778365735:web:8b475bcb31384495f5ff02",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };