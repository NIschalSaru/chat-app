import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import userSignup from "../../hooks/userSignup";
import { BsChatHeartFill } from "react-icons/bs";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signUp } = userSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
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
              <span className="text-base text-blue-300 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              placeholder="full name"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-blue-300 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              className="w-full input  input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              placeholder="username"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-blue-300 label-text">
                Password
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Enter password"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-blue-300 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
            />
          </div>

          <GenderCheck
            onChangeCheckBox={handleCheckboxChange}
            selectedgender={inputs.gender}
          ></GenderCheck>
          <Link
            to={"/login"}
            className="text-sm text-blue-300 hover:underline hover:text-white-600 mt-2 inline-block"
          >
            Already have an account?
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
                "SignUp"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
