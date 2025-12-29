import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productsRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import checkRouter from "./routes/checkoutRoutes.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/checkout", checkRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
