const { initializeApp } = require("firebase/app");
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getPerformance } from "firebase/performance";

// Initialize Firebase without config, check FIREBASE_CONFIG environment variable
const app = initializeApp(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

// https://firebase.google.com/docs/analytics/get-started?platform=web
const analytics = typeof window !== "undefined" ? getAnalytics(app) : undefined;

// https://firebase.google.com/docs/auth/web/start
const auth = getAuth(app);

// https://firebase.google.com/docs/perf-mon/get-started-web
const perf = typeof window !== "undefined" ? getPerformance(app) : undefined;

export { app, analytics, auth, perf };
