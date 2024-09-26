import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBdyud5uKdVnpT3HmAYei3kzHrwPBzwcAk",
  authDomain: "mebiut.firebaseapp.com",
  projectId: "mebiut",
  storageBucket: "mebiut.appspot.com",
  messagingSenderId: "891090208492",
  appId: "1:891090208492:web:1676a92adb2a5d929487c9",
  measurementId: "G-TNPE04JNRZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
