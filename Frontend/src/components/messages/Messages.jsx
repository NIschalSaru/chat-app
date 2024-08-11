import React, { useEffect } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../skeleton/MessageSkeleton";
import { useRef } from "react";

const Messages = () => {
  const { loading, messages } = useGetMessage();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        [...Array(8)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading &&
        messages.map((msg) => (
          <div key={msg._id} ref={lastMessageRef}>
            <Message message={msg} />{" "}
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a message to start a conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
