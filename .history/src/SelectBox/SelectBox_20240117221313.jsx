import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    console.log(selectInputRef.current.classList.contains("focus"));
    if (!selectInputRef.current.classList.contains("focus")) {
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
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>
      <div className="select-option">
        <div className="option-item">Task1</div>
      </div>
    </>
  );
};
