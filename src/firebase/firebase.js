import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  // Firebase Config to go here
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
