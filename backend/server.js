import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import connectDB from "./config/db.js";
import productsRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import checkRouter from "./routes/checkoutRoutes.js";


dotenv.config();
connectDB();

const app = express();

const __dirname = path.resolve();


app.use(cors());
app.use(express.json());


app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/checkout", checkRouter);

// 👉 Serve frontend
app.use(express.static(path.join(__dirname, "frontend/dist")));

// 👉 React Router fix (MUST BE LAST)
// React Router fallback (SAFE with Node 22)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/dist", "index.html")
  );
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
