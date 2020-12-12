import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA704Qy2QRvl6MDnI2vpKQ_qUgkodwmZOo",
    authDomain: "rumblefish-url-shortener.firebaseapp.com",
    projectId: "rumblefish-url-shortener",
    storageBucket: "rumblefish-url-shortener.appspot.com",
    messagingSenderId: "392712746966",
    appId: "1:392712746966:web:7c9ae521f3afe859521677"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

/**
 * stores a url
 *
 * @returns {*}
 * @param url
 */
export const store = (url) => {
    const ref = db.collection('urls').doc();

    ref.set({
        original: url
    });

    return ref;
};
