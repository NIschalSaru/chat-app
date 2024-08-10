import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../hooks/useGetConversation";
import { getRandomEmoji } from "../utils/emoji";

const Conversations = () => {
  const { loading, conversation } = useGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversation.map((user, idx) => {
        return (
          <Conversation
            key={user._id}
            user={user}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversation.length - 1}
          />
        );
      })}
      {loading ? <span className="loading loading-spinner text-white" /> : null}
    </div>
  );
};

export default Conversations;
