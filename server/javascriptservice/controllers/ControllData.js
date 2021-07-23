import Data from "../models/Data";

const createData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const getData = async (req, res) => {
  const dataInfo = req.body;
  try {
    const newData = new Data(dataInfo);
    await newData.save();
    console.log("Saved !");
    res.status(201).json(newData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const deleteData = (req, res) => {
  const { id } = req.params;
  try {
    await Data.findByIdAndDelete(id);
    res.json({ message: "Delete Complete !", result: true });
  } catch (error) {
    res.status(404).json({ message: error, result: false });
  }
};

export default { createData, getData, deleteData };
