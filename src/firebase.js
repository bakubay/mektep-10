// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDyNjI2cEeTSEBfNsF7oVGFWiUARBPBwyQ",

  authDomain: "myfirstproject-5899d.firebaseapp.com",

  projectId: "myfirstproject-5899d",

  storageBucket: "myfirstproject-5899d.appspot.com",

  messagingSenderId: "246893635359",

  appId: "1:246893635359:web:5c2d09c1f5b1c92cbff22a",
};

initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore();

import { writeBatch, doc } from "firebase/firestore";

const COURSES_COLLECTION = process.env.VUE_APP_COURSES_COLLECTION

export const addCourse = async (course) => {
  const batch = writeBatch(db);
  const courseRef = doc(db, COURSES_COLLECTION, course.courseInfo.courseId);
  const timestamp = Date.now();
  batch.set(courseRef, {
    courseName: course.courseInfo.courseName,
    courseDescription: course.courseInfo.courseDescription,
    courseImageUrl: course.courseInfo.courseImageUrl,
    courseCategory: course.courseInfo.courseCategory,
    createdAt: timestamp,

  });

  course.sections.forEach(function (section) {
    const sectionRef = doc(db, COURSES_COLLECTION, course.courseInfo.courseId, "sections", section.id);
    batch.set(sectionRef, {
      title: section.title,
      url: section.url,
      description: section.description,
      index: section.index,
      addRes: section.addRes,
    });
  });
  await batch.commit();
};
