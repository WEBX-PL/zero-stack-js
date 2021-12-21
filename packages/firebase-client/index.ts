import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";

// Initialize Firebase without config, check FIREBASE_CONFIG environment variable
export const app = initializeApp(
  JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
);
// https://firebase.google.com/docs/analytics/get-started?platform=web
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : undefined;

// https://firebase.google.com/docs/auth/web/start
export const auth = getAuth(app);

// https://firebase.google.com/docs/auth/web/start
export const db = getFirestore(app);

// https://firebase.google.com/docs/perf-mon/get-started-web
export const perf =
  typeof window !== "undefined" ? getPerformance(app) : undefined;
