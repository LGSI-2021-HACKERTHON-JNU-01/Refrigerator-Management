import firebase from 'firebase';
import db from './Firebase';

const FetchData = () => {
  const docRef = firebase.doc(db, 'data');
  const docSnap = firebase.getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

export default FetchData;
