import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyB0kff-KxgszjuBQFckswQugwa9utbm2B8',
  authDomain: 'english-mobile-app.firebaseapp.com',
  projectId: 'english-mobile-app',
  storageBucket: 'english-mobile-app.appspot.com',
  messagingSenderId: '856333343282',
  appId: '1:856333343282:web:8082589c9a13a69bf3fa2b',
  measurementId: 'G-S0CGY0Q5RN',
};
// Initialize Firebase
export const FirebaseApp = firebase.initializeApp(firebaseConfig);
