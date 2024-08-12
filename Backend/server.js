import path from "path";
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse JSON request bodies
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


// Serve static files from the frontend directory and connect backend with forntend
app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
