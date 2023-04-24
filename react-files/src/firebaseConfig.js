const firebaseConfig = {
  apiKey: "AIzaSyBcvOMCgE-24Y8k5KAzwjrblAsRyqJb-eI",
  authDomain: "projectdb-402ec.firebaseapp.com",
  databaseURL: "https://projectdb-402ec-default-rtdb.firebaseio.com",
  projectId: "projectdb-402ec",
  storageBucket: "projectdb-402ec.appspot.com",
  messagingSenderId: "818279951216",
  appId: "1:818279951216:web:f0ef3bd656247176f0fdb5",
};
//       firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// Load the Firebase SDKs from external script links
const firebaseAppScript = document.createElement("script");
firebaseAppScript.src =
  "https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js";
document.head.appendChild(firebaseAppScript);

const firestoreScript = document.createElement("script");
firestoreScript.src =
  "https://www.gstatic.com/firebasejs/8.0.2/firebase-firestore.js";
document.head.appendChild(firestoreScript);

const authScript = document.createElement("script");
authScript.src = "https://www.gstatic.com/firebasejs/8.0.2/firebase-auth.js";
document.head.appendChild(authScript);

// Wait for the scripts to load, then initialize Firebase and export the modules
Promise.all([firebaseAppScript, firestoreScript, authScript]).then(() => {
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();
  var auth = firebase.auth();
});
export default { db, auth };
