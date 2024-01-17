import React, { useRef } from "react";

export const SelectBox = () => {
  const inputRef = useRef(null);
  const selectInputRef = useRef(null);
  const handleFocus = () => {
    selectInputRef.current.className.toggle("focus");
  };
  return (
    <>
      <div className="select-input" ref={selectInputRef}>
        <div className="select-item">
          <span>task-1</span>
          <span className="btn-delete">x</span>
        </div>
        <div className="select-item">
          <span>task-1</span>
          <span className="btn-delete">x</span>
        </div>
        <input className="input" ref={inputRef} onFocus={handleFocus}></input>
      </div>
    </>
  );
};
