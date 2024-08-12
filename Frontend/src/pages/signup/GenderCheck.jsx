import React from "react";

function GenderCheck({ onChangeCheckBox, selectedgender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedgender == "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            checked={selectedgender === "male"}
            onChange={() => onChangeCheckBox("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedgender == "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-black">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            checked={selectedgender === "female"}
            onChange={() => onChangeCheckBox("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheck;
