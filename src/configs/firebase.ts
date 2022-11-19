// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import {
	updateProfile,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
const googleProvider = new GoogleAuthProvider()

const firebaseConfig = {
	apiKey: 'AIzaSyAfQROfzCQzXE92qLySsyYwJ0kWpdK1718',
	authDomain: 'pinterest-clone-df800.firebaseapp.com',
	projectId: 'pinterest-clone-df800',
	storageBucket: 'pinterest-clone-df800.appspot.com',
	messagingSenderId: '218822035100',
	appId: '1:218822035100:web:8cf985eaea247d3a1f8f59',
}

// Initialize Firebase
const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	auth,
	db,
	GoogleAuthProvider,
	googleProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
}
