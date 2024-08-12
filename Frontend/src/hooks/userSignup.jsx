import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const userSignup = () => {
  const [loading, setLoading] = useState(false);
  // const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const sucess = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!sucess) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        toast.success(
          "Your account has been created successfully. You can now log in."
        );
        navigate("/login");
      }

      //setuser Data in local storage and context state
      // localStorage.setItem("chat-user", JSON.stringify(data));
      // setAuthUser(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

export default userSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Passwords must be at least 6 characters long");
    return false;
  }

  return true;
}
