import { doc, getDoc } from 'firebase/firestore';

const FetchData = () => {
  const docRef = doc(db, 'data');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

export default FetchData;
