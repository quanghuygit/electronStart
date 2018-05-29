import firebase from "firebase"
import firebase_config from "../configs/firebase"

var firebaseEl = firebase.initializeApp(firebase_config)

export default firebaseEl;