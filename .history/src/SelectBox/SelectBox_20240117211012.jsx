import React from "react";

export const SelectBox = () => {
  return (
    <div>
      {" "}
      <div className="select-input">
        <div className="select-item">
          <span>task-1</span>
          <span className="btn-delete">x</span>
        </div>
        <div className="select-item">
          <span>task-1</span>
          <span className="btn-delete">x</span>
        </div>
        <input className="input"></input>
      </div>
    </div>
  );
};
