

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

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
  console.log('server running on port ${PORT}');
});