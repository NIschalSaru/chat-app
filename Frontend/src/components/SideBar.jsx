import React from "react";
import SearchInput from "./SearchInput";

function SideBar() {
  return (
    <div>
      <SearchInput />
      <div className="w-full border-t border-gray-300 my-4"></div>
      {/* <Conversation />
      <Logout /> */}
    </div>
  );
}

export default SideBar;
