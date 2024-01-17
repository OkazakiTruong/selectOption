import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import {
  faMagnifyingGlass,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export const SelectBox = ({
  optItems,
  handleChangeOptItems,
  handleDeleteOptItems,
}) => {
  const [filter, setFilter] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  const selectInputRef = useRef(null);
  const selectOptionRef = useRef(null);
  const wrapperRef = useRef(null);
  const handleFocus = () => {
    selectInputRef.current.classList.add("focus");
    selectOptionRef.current.classList.add("show");
    setIsFocus(true);
  };

  const handleBlur = (e) => {
    if (wrapperRef && !wrapperRef.current.contains(e.target)) {
      console.log("blur");
      selectInputRef.current.classList.remove("focus");
      selectOptionRef.current.classList.remove("show");
      setIsFocus(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  });
  const handleClick = () => {
    if (!selectInputRef.current.classList.contains("focus")) {
      inputRef.current.focus();
    }
  };
  const handleSearchBtn = (e) => {
    e.stopPropagation();
    if (isFocus) {
      selectInputRef.current.classList.remove("focus");
      selectOptionRef.current.classList.remove("show");
      setIsFocus(false);
    } else {
      handleFocus();
    }
  };

  return (
    <div ref={wrapperRef}>
      <div className="select-input" ref={selectInputRef} onClick={handleClick}>
        {/* <div className="select-item">
          <span>task-1</span>
          <FontAwesomeIcon icon={faXmark} className="btn-delete" />
        </div>
        <div className="select-item">
          <span>task-1</span>
          <FontAwesomeIcon icon={faXmark} className="btn-delete" />
        </div> */}
        {optItems?.map((optItem) => {
          if (optItem.status) {
            return (
              <div className="select-item" key={optItem.id}>
                <span>{optItem.name}</span>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="btn-delete"
                  onClick={(e) => {
                    handleDeleteOptItems(e, optItem.id);
                  }}
                />
              </div>
            );
          }
        })}
        <input className="input" ref={inputRef} onFocus={handleFocus}></input>
        <FontAwesomeIcon
          icon={isFocus ? faXmark : faMagnifyingGlass}
          onClick={handleSearchBtn}
          className="search-icon"
        />
      </div>
      <div className="select-option" ref={selectOptionRef}>
        {optItems?.map((optItem) => {
          return (
            <div
              className={optItem.status}
              key={optItem.id}
              data_id={optItem.id}
              onMouseDown={(e) => {
                handleChangeOptItems(e, optItem.id);
              }}
            >
              {optItem.name}
              {optItem.status ? (
                <FontAwesomeIcon icon={faCheck} className="check-icon" />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
