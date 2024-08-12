import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setConversation } = useConversation();

  useEffect(() => {
    //cleanUp function
    return () => setConversation(null);
  }, [setConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex flex-col h-full">
            <div className="glass px-4 py-2 mb-2 flex items-center">
              <img
                className="w-8 h-8 mr-2"
                src={selectedConversation.profilePic}
                alt="user avatar"
              />
              <p className="font-thin text-gray-200 no-select">
                {selectedConversation.fullName}
              </p>
            </div>

            <div className="flex-1 overflow-auto">
              <Messages />
            </div>

            <div className="mt-2">
              <MessageInput />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋{authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <LuMessagesSquare className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
