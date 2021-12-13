// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyDyNjI2cEeTSEBfNsF7oVGFWiUARBPBwyQ",

  authDomain: "myfirstproject-5899d.firebaseapp.com",

  projectId: "myfirstproject-5899d",

  storageBucket: "myfirstproject-5899d.appspot.com",

  messagingSenderId: "246893635359",

  appId: "1:246893635359:web:5c2d09c1f5b1c92cbff22a"

};

initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore();

import { collection, getDocs } from "firebase/firestore"; 



export const logstuff = async () =>{ 
  const querySnapshot =  await getDocs(collection(db, "courses"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().name}`);
});
console.log("LOG STUFF");
}
