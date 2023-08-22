
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpVZaq96ZXtjtieQAwS6dYgve_gaiJGiw",
  authDomain: "express-api-8f36c.firebaseapp.com",
  projectId: "express-api-8f36c",
  storageBucket: "express-api-8f36c.appspot.com",
  messagingSenderId: "956107118761",
  appId: "1:956107118761:web:66e439cbf47310d63071b8",
  measurementId: "G-6R3RRVF72G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const storage = getStorage(app); */
export const storage = getStorage(app);