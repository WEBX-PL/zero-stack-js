const { initializeApp, getApps } = require("firebase/app");
const {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  runTransaction,
  updateDoc,
  where,
} = require("firebase/firestore/lite");

const apps = getApps();
// Initialize Firebase Admin, check FIREBASE_SERVICE_ACCOUNT environment variable
const firebaseOptions = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);
const app = (apps.length && apps[0]) || initializeApp(firebaseOptions);
const db = getFirestore(app);

export {
  app,
  db,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  runTransaction,
  updateDoc,
  where,
};
