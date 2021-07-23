import { Mongoose } from "mongoose";

const Schema = Mongoose.Schema;

const IngredientsTable = new Schema({
  name: String,
  number: Number,
  deliveryDate: Date,
  shelfLifr: Date,
});

const Data = Mongoose.model("Data", IngredientsTable);
export default Data;
