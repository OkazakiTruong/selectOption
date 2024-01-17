import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

export const SelectBox = () => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  const selectInputRef = useRef(null);
  const handleFocus = () => {
    selectInputRef.current.classList.add("focus");
    setIsFocus(true);
  };
  const handleBlur = (e) => {
    e.stopPropagation();
    if (selectInputRef.current.classList.contains("focus")) {
      selectInputRef.current.classList.remove("focus");
      setIsFocus(false);
    }
  };
  const handleClick = () => {
    if (!selectInputRef.current.classList.contains("focus")) {
      inputRef.current.focus();
    }
  };
  const handleSearchBtn = (e) => {
    e.stopPropagation();
    if (isFocus) {
      selectInputRef.current.classList.remove("focus");
      setIsFocus(false);
    } else {
      selectInputRef.current.classList.add("focus");
      setIsFocus(true);
    }
  };
  return (
    <>
      <div className="select-input" ref={selectInputRef} onClick={handleClick}>
        <div className="select-item">
          <span>task-1</span>
          <FontAwesomeIcon icon={faXmark} className="btn-delete" />
        </div>
        <div className="select-item">
          <span>task-1</span>
          <FontAwesomeIcon icon={faXmark} className="btn-delete" />
        </div>
        <input
          className="input"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
        <FontAwesomeIcon
          icon={isFocus ? faXmark : faMagnifyingGlass}
          onClick={handleSearchBtn}
          className="search-icon"
        />
      </div>
      <div className="select-option">
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
      </div>
    </>
  );
};
