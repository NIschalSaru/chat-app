import express from "express";
import { sendMessage, getMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage); //send message between current user & provided userId
router.get("/:id", protectRoute, getMessage); //get messsage between current user & provided userId

export default router;
