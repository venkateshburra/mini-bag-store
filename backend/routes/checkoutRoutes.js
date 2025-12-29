import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {

  const { name, email, address, items, total } = req.body;

      if (!name || !email || !address || !items || !total) {
    return res.status(404).json({ message: "Missing some fields" });
  }
  
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order placed successfully" });
});

export default router;
