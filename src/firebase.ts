import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp ({
	apiKey: "AIzaSyDDEf8sWLMV06ILyJZkNvgJyazmhgdnQ6E",
	authDomain: "weldchat-development.firebaseapp.com",
	projectId: "weldchat-development",
	storageBucket: "weldchat-development.appspot.com",
	messagingSenderId: "32232139533",
	appId: "1:32232139533:web:defd51061b8def16251e44"
})

export const auth = app.auth()
export default app
