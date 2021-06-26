import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

// import config from './env'

const firebaseConfig = {
    apiKey: "AIzaSyA6LRtT34xuhQdkCA_Lnj8iJGQSBi_HeEw",
  authDomain: "campus24-e59d4.firebaseapp.com",
  databaseURL: "https://campus24-e59d4.firebaseio.com",
  projectId: "campus24-e59d4",
  storageBucket: "campus24-e59d4.appspot.com",
  messagingSenderId: "139061576040",
  appId: "1:139061576040:web:63cd5eaa9468bc398216dd",
  measurementId: "G-MB2MML22VV"
}
firebase.initializeApp(firebaseConfig)

const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {timestamp}
export default firebase