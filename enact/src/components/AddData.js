import { addDoc, Timestamp, Collection } from 'firebase/firestore';

const AddData = ({ ingredientName, ingredientNumber }) => {
  const docData = await addDoc(Collection(db, 'data', ingredientName), {
    name: ingredientName,
    number: ingredientNumber,
    deliveryTime: Timestamp.now(),
  });
};

export default AddData;
