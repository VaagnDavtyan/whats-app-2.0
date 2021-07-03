import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKUh8S2bmLsalvvwTm-2guhJ_hAyFEeBs",
    authDomain: "whats-app-clone-vaagn.firebaseapp.com",
    projectId: "whats-app-clone-vaagn",
    storageBucket: "whats-app-clone-vaagn.appspot.com",
    messagingSenderId: "971858782072",
    appId: "1:971858782072:web:0b628609fdb954a38aca8d"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };