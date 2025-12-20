require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Serve static files from Vite build
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// React Router fallback — ONLY for requests without a file extension
app.get(/^(?!.*\..*$)/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
