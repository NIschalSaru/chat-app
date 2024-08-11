import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage.id);
    }

    //SOCKET.IO FUNCTIONALITY FOR REAL-TIME CHAT

    //this will not run in parallel
    // await conversation.save();
    // await newMessage.save();

    // this will run in parallel
    await Promise.all([newMessage.save(), conversation.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // instead of returning messages data array, it returns each populated message objects

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch ($e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
