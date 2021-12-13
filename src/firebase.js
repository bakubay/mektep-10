// Import the functions you need from the SDKs you need

import {
  initializeApp
} from "firebase/app"
import {
  getFirestore
} from "firebase/firestore"

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

import {
  collection,
  getDocs
} from "firebase/firestore";



export const logstuff = async () => {
  const querySnapshot = await getDocs(collection(db, "courses"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
  });
}

import {
  writeBatch,
  doc
} from "firebase/firestore"
export const addCourse = async (course) => {
  const batch = writeBatch(db);
  const courseRef = doc(db, "courses", course.courseInfo.courseId);
  batch.set(courseRef, {
    courseName: course.courseInfo.courseName,
    courseDescription: course.courseInfo.courseDescription,
    courseImageUrl: course.courseInfo.courseImageUrl,
    courseCategory: course.courseInfo.courseCategory,
  });

  course.sections.forEach(function (section) {
    const sectionRef = doc(db, "courses", course.courseInfo.courseId, "sections", section.id);
    batch.set(sectionRef, {
      title: section.title,
      url: section.url,
      description: section.description,
      addRes: section.addRes,
    })
  })
  await batch.commit();
}