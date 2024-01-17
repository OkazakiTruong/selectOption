import React, { useRef } from "react";

export const SelectBox = () => {
  const inputRef = useRef(null);
  const selectInputRef = useRef(null);
  const handleFocus = () => {
    selectInputRef.current.classList.add("focus");
  };
  const handleBlur = () => {
    selectInputRef.current.classList.remove("focus");
  };
  const handleClick = () => {
    if (!selectInputRef.current.classList.contain("focus")) {
      console.log("focus");
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div className="select-input" ref={selectInputRef} onClick={handleClick}>
        <div className="select-item">
          <span>task-1</span>
          <span className="btn-delete">x</span>
        </div>
        <div className="select-item">
          <span>task-1</span>
          <span className="btn-delete">x</span>
        </div>
        <input
          className="input"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
      </div>
    </>
  );
};
