import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ80l3dC_RFe-L4R-33hUc-NBbTPtFHuQ",
  authDomain: "fire-contact-aca48.firebaseapp.com",
  databaseURL: "https://fire-contact-aca48-default-rtdb.firebaseio.com",
  projectId: "fire-contact-aca48",
  storageBucket: "fire-contact-aca48.appspot.com",
  messagingSenderId: "1065766940768",
  appId: "1:1065766940768:web:0be9bb5ca79ca54a435305",
};

const app = initializeApp(firebaseConfig);
export default app;
