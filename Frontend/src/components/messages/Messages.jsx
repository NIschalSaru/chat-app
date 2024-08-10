import React from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../skeleton/MessageSkeleton";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* {loading &&
        [...Array(8)].map((_, index) => <MessageSkeleton key={index} />)} */}

      {!loading && messages.length == 0 && (
        <p className="text-center">Send a message to start a conversation</p>
      )}
    </div>
  );
};

export default Messages;
