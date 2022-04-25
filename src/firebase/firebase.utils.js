import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAunaXNsjdE7vvv__d-heabnO1hMXulQeU",
  authDomain: "project-honey-95f27.firebaseapp.com",
  projectId: "project-honey-95f27",
  storageBucket: "project-honey-95f27.appspot.com",
  messagingSenderId: "308745804498",
  appId: "1:308745804498:web:2ff649d23abeeb9e922b0b",
  measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

//getting the authentication object, so we can use it, or export it
const auth = getAuth(app);

const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

const signInWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

//gettint the firestore, to store users in the database
const firestore = getFirestore();

//store user data in firebase
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, "users", `${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user " + error);
    }
  }
  return userRef;
};

const storeUserAddress = async (currentUser, userInput) => {
  if (!currentUser) return;

  const userRef = doc(firestore, "users", currentUser.uid);

  try {
    await setDoc(
      userRef,
      {
        ...userInput
      },
      {
        merge: true
      }
    );
  } catch (error) {
    console.log("error storing user address " + error);
  }
};

const getUserAddress = async (currentUser) => {
  if (!currentUser) return;

  const userRef = doc(firestore, "users", currentUser.uid);
  const snapshot = await getDoc(userRef);
  const data = snapshot.data();
  return {
    name: data.name,
    email: data.email,
    tel: data.tel,
    city: data.city,
    post: data.post,
    address: data.address,
    useDifferentAddressForInvoice: data.useDifferentAddressForInvoice,
    invoiceName: data.invoiceName,
    invoiceAddress: data.invoiceAddress,
    invoiceCity: data.invoiceCity,
    invoicePost: data.invoicePost
  };
};

/*
const convertSuppliesSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((acc, collection)=> {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
}
*/

export {
  signInWithGoogle,
  auth,
  createUserProfileDocument,
  signInWithEmail,
  storeUserAddress,
  getUserAddress,
  firestore
};
