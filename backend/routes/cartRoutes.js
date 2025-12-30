import express from "express";
import { randomUUID } from "crypto";

const router = express.Router();


let cart = [];

router.post("/", (req, res) => {
  cart.unshift({
    ...req.body,
    cartItemId: randomUUID(),
  });
  res.json(cart);
});


router.get("/", (req, res) => {
  res.json(cart);
});


router.delete("/:cartItemId", (req, res) => {
  cart = cart.filter(
    item => item.cartItemId !== req.params.cartItemId
  );
  res.json(cart);
});

router.delete("/", (req, res) => {
  cart = [];
  res.json(cart);
});

export default router;
