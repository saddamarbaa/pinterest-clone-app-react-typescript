/** @format */

import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAfQROfzCQzXE92qLySsyYwJ0kWpdK1718",
	authDomain: "pinterest-clone-df800.firebaseapp.com",
	projectId: "pinterest-clone-df800",
	storageBucket: "pinterest-clone-df800.appspot.com",
	messagingSenderId: "218822035100",
	appId: "1:218822035100:web:8cf985eaea247d3a1f8f59",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
