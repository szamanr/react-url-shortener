import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA704Qy2QRvl6MDnI2vpKQ_qUgkodwmZOo",
    authDomain: "rumblefish-url-shortener.firebaseapp.com",
    projectId: "rumblefish-url-shortener",
    storageBucket: "rumblefish-url-shortener.appspot.com",
    messagingSenderId: "392712746966",
    appId: "1:392712746966:web:7c9ae521f3afe859521677"
};

// initialise app or use existing one
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const db = firebase.firestore();

/**
 * stores an item in db
 *
 * @returns {*}
 * @param collection
 * @param item
 */
export const store = (collection, item) => {
    const ref = db.collection(collection).doc();

    ref.set(item);

    return ref;
};

/**
 * gets item from db
 *
 * @param collection
 * @param id
 * @returns {Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>>}
 */
export const get = (collection, id) => {
    return db.collection(collection).doc(id).get();
}
