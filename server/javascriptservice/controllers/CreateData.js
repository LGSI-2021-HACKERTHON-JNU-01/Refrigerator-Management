import Data from "../models/Data";

const createData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export default createData;
