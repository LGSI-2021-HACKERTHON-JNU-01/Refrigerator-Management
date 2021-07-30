import { doc, addDoc, Timestamp } from 'firebase/firestore';

const docData = {
  name: 'carrot',
  number: 3,
  deliveryTime: Timestamp.fromDate(new Date('July 30, 2021')),
  shelfLife: Timestamp.fromDate(new Date('August 30, 2021')),
};

await addDoc(doc(db, 'data'), docData);
