require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Connect to MongoDB
connectDB();

/* Middleware */
app.use(cors());
app.use(express.json());

/* API routes */
app.use("/api/products", productRoutes);

/* Serve Vite frontend static files */
app.use(express.static(path.join(__dirname, "dist")));

/* React Router fallback */
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* Start server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
