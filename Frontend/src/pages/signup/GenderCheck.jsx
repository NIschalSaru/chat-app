import React from "react";

function GenderCheck() {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-blue-300">Male</span>
          <input type="checkbox" className="checkbox checkbox-success" />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-blue-300">Female</span>
          <input type="checkbox" className="checkbox checkbox-success" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheck;
