import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <form className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
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
