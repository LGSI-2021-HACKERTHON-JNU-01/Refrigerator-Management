import { doc, deleteDoc } from 'firebase/firestore';
import db from './Firebase';

const DeleteData = ingredientName => {
  deleteDoc(doc(db, 'data', ingredientName));
};

export default DeleteData;
