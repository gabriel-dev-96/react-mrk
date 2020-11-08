import firebase from 'firebase';
import firebaseConfig from '../tokens/firebase.json';

const fb = firebase.initializeApp(firebaseConfig);

export default fb;