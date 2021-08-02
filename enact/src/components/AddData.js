import { addDoc, Timestamp, Collection } from 'firebase/firestore';
import db from './Firebase';

const AddData = ({ ingredientName, ingredientNumber }) => {
  addDoc(Collection(db, 'data', ingredientName), {
    name: ingredientName,
    number: ingredientNumber,
    deliveryTime: Timestamp.now(),
  });
};

export default AddData;
