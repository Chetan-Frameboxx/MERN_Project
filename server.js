require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();
connectDB();

/* Middleware */
app.use(cors());
app.use(express.json());

/* API routes */
app.use("/api/products", productRoutes);

/* Serve Vite frontend */
app.use(express.static(path.join(__dirname, "dist")));

/* React Router fallback (Node 22 safe) */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
