import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(Array.isArray(data) ? data : []);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessage();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
