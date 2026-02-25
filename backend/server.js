const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());           // allow frontend to access backend
app.use(express.json());   

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));