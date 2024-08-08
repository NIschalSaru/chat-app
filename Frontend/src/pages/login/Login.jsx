import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChatHeartFill } from "react-icons/bs";
import userLogin from "../../hooks/userLogin";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { loading, login } = userLogin();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="flex justify-center text-3xl font-semibold text-gray-300">
          <BsChatHeartFill className="w-10 h-10" />
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base  text-blue-300 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base  text-blue-300 label-text">
                Password
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-blue-300 hover:underline hover:text-white-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              className={`input input-bordered h-10 btn-block glass text-white ${
                loading ? "" : "hover:bg-slate-600"
              }`}
              style={{
                backgroundColor: loading ? "rgba(0, 0, 0, 0.5)" : "", //
                opacity: loading ? 0.5 : 1,
                pointerEvents: loading ? "none" : "auto",
              }}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-white" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
