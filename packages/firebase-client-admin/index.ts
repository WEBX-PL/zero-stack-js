const { initializeApp, cert, getApps } = require("firebase-admin/app");
// const { getRemoteConfig } = require("firebase/remote-config");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
// const {
//   initializeAppCheck,
//   ReCaptchaV3Provider,
// } = require("firebase/app-check");

const apps = getApps();

// Initialize Firebase Admin, check FIREBASE_SERVICE_ACCOUNT environment variable
const admin =
  (apps.length && apps[0]) ||
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });

// https://www.google.com/recaptcha/admin/create
// https://firebase.google.com/docs/app-check/web/debug-provider
// const appCheck = initializeAppCheck(admin, {
//   provider: new ReCaptchaV3Provider(process.env.CAPTCHA_SECRET_KEY),
//   isTokenAutoRefreshEnabled: true,
// });

// https://firebase.google.com/docs/remote-config/get-started?platform=web
// const remoteConfig = getRemoteConfig(admin);
// remoteConfig.defaultConfig = {
//   welcome_message: "Welcome",
// };
// remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

const db = getFirestore(admin);

const converter = {
  toFirestore: (data) => {
    Object.keys(data).forEach((key) => {
      if (typeof data[key].getMonth === "function") {
        data[key] = Timestamp.fromDate(data[key]);
      }
    });
    return data;
  },
  fromFirestore: (snapshot) => {
    const data = snapshot.data();
    Object.keys(data).forEach((key) => {
      if (
        typeof data[key].toDate == "function" &&
        typeof data[key].seconds == "number"
      ) {
        data[key] = data[key].toDate().toString();
      }
    });
    return data;
  },
};

export { admin, db, converter };
