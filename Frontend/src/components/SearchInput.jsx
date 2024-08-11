import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversation from "../hooks/useGetConversation";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setConversation } = useConversation();
  const { conversation } = useGetConversation();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const convo = conversation.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (convo) {
      setConversation(convo);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form className="flex items-center gap-1" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white hover:bg-sky-600"
      >
        <IoSearch className="w-6 h-6 outline-none hover:text-black" />
      </button>
    </form>
  );
}

export default SearchInput;
