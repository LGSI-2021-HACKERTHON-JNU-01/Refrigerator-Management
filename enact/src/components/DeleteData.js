import { doc, deleteDoc } from 'firebase/firestore';

const DeleteData = ingredientName => {
  await deleteDoc(doc(db, 'data', ingredientName));
};

export default DeleteData;
