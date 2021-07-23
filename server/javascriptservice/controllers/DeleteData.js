import Data from "../models/Data";

const deleteData = (req, res) => {
  const { id } = req.params;
  try {
    await Data.findByIdAndDelete(id);
    res.json({ message: "Delete Complete !", result: true });
  } catch (error) {
    res.status(404).json({ message: error, result: false });
  }
};

export default deleteData;
