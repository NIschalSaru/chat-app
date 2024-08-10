import React from "react";
import useConversation from "../zustand/useConversation";

const Conversation = ({ user, emoji, lastIdx }) => {
  const { selectedConversation, setConversation } = useConversation();

  const isSelected = selectedConversation?._id === user._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:glass rounded p-2 py-1 cursor-pointer ${
          isSelected ? "glass text-white" : ""
        }`}
        onClick={() => setConversation(user)}
      >
        <div className="avatar offline">
          <div className="w-12 rounded-full">
            <img src={user.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font bold text-gray-200 no-select">{user.fullName}</p>
            <span className="text-x1">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
