import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCYndwTQHH8I33d5vW-W5zX9L3ALhsP9iQ',
  authDomain: 'instagram-yt-48a56.firebaseapp.com',
  projectId: 'instagram-yt-48a56',
  storageBucket: 'instagram-yt-48a56.appspot.com',
  messagingSenderId: '430149369282',
  appId: '1:430149369282:web:909644cd19a2bc32342a5b'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
