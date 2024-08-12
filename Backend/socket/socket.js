import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];

  //provide socketId from userSocketMap of receiverId
};

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
  console.log("connected", socket.id);

  const userId = socket.handshake.query.userId;

  //handshake is the initial connection request that a client makes to the server when establishing a WebSocket connection
  if (userId != undefined) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  //socket.on() is used to listen for incoming events. Can be used both on the client and server-side.
  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
