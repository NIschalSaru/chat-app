import React from "react";
import GenderCheck from "./GenderCheck";

const SignUp = () => {
  return (
    <div classNameName="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-blue-300 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="John Doe"
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
              placeholder="jhondoe"
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
              placeholder="Confirm Password"
            />
          </div>

          <GenderCheck></GenderCheck>
          <a
            href="#"
            className="text-sm text-blue-300 hover:underline hover:text-white-600 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="input input-bordered h-10 btn-block text-blue-300 btn-sm mt-2 bg-transparent">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
