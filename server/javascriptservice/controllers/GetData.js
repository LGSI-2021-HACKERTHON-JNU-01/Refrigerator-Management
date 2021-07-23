import Data from "../models/Data";

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

export default getData;
