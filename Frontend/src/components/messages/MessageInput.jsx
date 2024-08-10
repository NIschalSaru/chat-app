import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [messages, setMessages] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!messages) return;
    await sendMessage(messages);
    setMessages("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleOnSubmit}>
      <div className="w-full flex items-center">
        <div style={{ width: "90%" }}>
          <input
            type="text"
            className="text-sm rounded-lg w-full p-2.5 bg-gray-200 text-black border-none outline-none focus:ring-0"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            placeholder="Send a message"
          />
        </div>

        <div style={{ width: "10%" }} className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center h-full w-full"
          >
            {loading ? (
              <div className="loading loading-spinner"></div>
            ) : (
              <IoIosSend className="text-white h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
