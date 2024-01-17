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
  handleClearAll,
}) => {
  const [filter, setFilter] = useState("");
  const [optBox, setOptBox] = useState(null);
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
      handleClearAll(e);
    } else {
      handleFocus();
    }
  };
  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  });
  useEffect(() => {
    setOptBox(optItems);
  }, []);
  useEffect(() => {
    console.log(setOptBox);
    const newArr = optItems?.map((optItem) => {
      if (filter === "") {
        return optItem;
      } else {
        if (
          optItem.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(
              filter
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            )
        ) {
          return optItem;
        }
      }
    });
    setOptBox(newArr);
  }, [optItems, filter]);
  return (
    <div ref={wrapperRef}>
      <div className="select-input" ref={selectInputRef} onClick={handleClick}>
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
        <input
          className="input"
          ref={inputRef}
          onFocus={handleFocus}
          onChange={handleInputChange}
        ></input>
        <FontAwesomeIcon
          icon={isFocus ? faXmark : faMagnifyingGlass}
          onClick={handleSearchBtn}
          className="search-icon"
        />
      </div>
      <div className="select-option" ref={selectOptionRef}>
        {optBox?.length ? (
          <div>Không tìm thấy kết quả</div>
        ) : (
          optItems.map((optItem) => {
            return (
              <div
                className={
                  !optItem.status ? "option-item" : "option-item checked"
                }
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
          })
        )}
      </div>
    </div>
  );
};
