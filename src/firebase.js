// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIGGlBIyVCmUW9G-hF1_U6xZeWIjfnLyI",
    authDomain: "facebook-clone-ecb22.firebaseapp.com",
    projectId: "facebook-clone-ecb22",
    storageBucket: "facebook-clone-ecb22.appspot.com",
    messagingSenderId: "50690559762",
    appId: "1:50690559762:web:a6ad2c7b9525ec850b2dcb",
    measurementId: "G-EHMWLX6986"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,storage};
  export default db;