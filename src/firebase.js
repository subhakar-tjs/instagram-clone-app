// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";


  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyC0xQClVWPYP9uDCiCcyrrd20DyFZndbb0",
    authDomain: "instagram-clone-app-2276a.firebaseapp.com",
    databaseURL: "https://instagram-clone-app-2276a-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-app-2276a",
    storageBucket: "instagram-clone-app-2276a.appspot.com",
    messagingSenderId: "192024965440",
    appId: "1:192024965440:web:b770f8d59acff72eac0aa5",
    measurementId: "G-3FCYB02JG0"
  })

  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db,auth,storage}