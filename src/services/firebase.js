import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// import * as firebaseui from "firebaseui";
firebase.initializeApp({
    apiKey: "AIzaSyBAG5jpMdPDWpOsLyTZrp8tbjoTvFoXCT8",
    authDomain: "gestiontipf.firebaseapp.com",
    databaseURL: "https://gestiontipf.firebaseio.com",
    projectId: "gestiontipf",
    storageBucket: "gestiontipf.appspot.com",
    messagingSenderId: "65324062031",
    appId: "1:65324062031:web:16538b0aa2179a941a213a",
    measurementId: "G-9FR6R0P3GT"
});


export { firebase };
export const auth = firebase.auth();
export const firestore = firebase.firestore()


export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email, username } = user;
      try {
        await userRef.set({
          email,
          username,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid)
}

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
  
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  