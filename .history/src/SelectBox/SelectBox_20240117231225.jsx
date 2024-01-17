import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

export const SelectBox = ({ optItems, handleChangeOptItems }) => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef(null);
  const selectInputRef = useRef(null);
  const selectOptionRef = useRef(null);
  const handleFocus = () => {
    selectInputRef.current.classList.add("focus");
    selectOptionRef.current.classList.add("show");
    setIsFocus(true);
  };
  const handleBlur = () => {
    selectInputRef.current.classList.remove("focus");
    selectOptionRef.current.classList.remove("show");
    setIsFocus(false);
  };
  const handleClick = () => {
    if (!selectInputRef.current.classList.contains("focus")) {
      inputRef.current.focus();
    }
  };
  const handleSearchBtn = (e) => {
    e.stopPropagation();
    if (isFocus) {
      handleBlur();
    } else {
      handleFocus();
    }
  };
  const handleItemClick = (e, id) => {
    inputRef.current.focus();
    console.log(id);
  };
  return (
    <div>
      <div className="select-input" ref={selectInputRef} onClick={handleClick}>
        {/* <div className="select-item">
          <span>task-1</span>
          <FontAwesomeIcon icon={faXmark} className="btn-delete" />
        </div>
        <div className="select-item">
          <span>task-1</span>
          <FontAwesomeIcon icon={faXmark} className="btn-delete" />
        </div> */}
        {optItems?.filter((optItem) => {
          return optItem.status;
        })}
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
      <div className="select-option" ref={selectOptionRef}>
        {/* <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div>
        <div className="option-item">Task1</div> */}
        {optItems?.map((optItem) => {
          return (
            <div
              className="option-item"
              key={optItem.id}
              data_id={optItem.id}
              onMouseDown={(e) => {
                handleItemClick(e, optItem.id);
              }}
            >
              {optItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
