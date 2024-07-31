import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // to parse JSON request bodies
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello, World!!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
