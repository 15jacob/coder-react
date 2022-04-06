import { initializeApp } from "firebase/app";

const firebaseConfig =
{
  apiKey: "AIzaSyDvEI67jP_miUVsbKVPR0fd8ykQGuhZXaA",
  authDomain: "u63-reactjs.firebaseapp.com",
  projectId: "u63-reactjs",
  storageBucket: "u63-reactjs.appspot.com",
  messagingSenderId: "131663815733",
  appId: "1:131663815733:web:fe1c7017a222842d7a7d7c"
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => { return app };