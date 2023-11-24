import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6l1SudvNAWnHzp_VM4ZcUdX19UzbnitY",
  authDomain: 'otpverification-dd22f.firebaseapp.com',
//   databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: "otpverification-dd22f",
//   storageBucket: 'your-project-id-1234.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
  appId: '1:728739381454:android:91fbdd85cbc2795d7f509f',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };