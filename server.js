

const express = require("express");
const dotenv = require("dotenv");
const connectDB =require("./config/db")



dotenv.config();
connectDB();
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "This is protected data 🔐",
    user: req.user
  });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => console.log("Server running on port 5000"));