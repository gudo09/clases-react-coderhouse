// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  // apiKey: "AIzaSyAVVv6BeSu6pyefMB_3pdhxg6l5tyLMr7A",
  // authDomain: "gudo09-tienda-videojuegos.firebaseapp.com",
  // projectId: "gudo09-tienda-videojuegos",
  // storageBucket: "gudo09-tienda-videojuegos.appspot.com",
  // messagingSenderId: "180985811718",
  // appId: "1:180985811718:web:18873f8b30ad5a13850487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // obentgo la base de datos mediante las credenciales guardadas en app
