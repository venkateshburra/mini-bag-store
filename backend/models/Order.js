import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  items: Array,
  total: Number,
});

export default mongoose.model("Order", orderSchema);
