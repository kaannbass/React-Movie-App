import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STRAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_ID,
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("User Create");
    return user;
  } catch (e) {
    toast.error(e.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Login Success...");
    return user;
  } catch (e) {
    toast.error(e.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    toast.error(e.message);
  }
};

export default firebase;
