import React from "react";
import "./selectbox.css";

export const SelectBoxContainer = () => {
  return (
    <div>
      <div className="select-input">
        <div className="select-item">
          task-1
          <span className="btn-delete">x</span>
        </div>
        <input className="input"></input>
      </div>
    </div>
  );
};
