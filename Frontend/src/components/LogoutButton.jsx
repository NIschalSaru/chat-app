import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import userLogout from "../hooks/userLogout";
import LogoutModal from "./LogoutModal";

const LogoutButton = ({ onOpenModal }) => {
  const { loading } = userLogout();
  return (
    <div className="mt-4 ">
      {!loading ? (
        <BiLogOutCircle
          className="w-7 h-7 text-gray-800 cursor-pointer"
          onClick={onOpenModal}
        />
      ) : (
        <span className="loading loading-spinner text-white"></span>
      )}
    </div>
  );
};

// export default LogoutButton;

const Logout = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);

  return (
    <div>
      <LogoutButton onOpenModal={handleOpenModal} />
      {open && <LogoutModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Logout;
