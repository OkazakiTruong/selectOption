import React, { useState } from "react";
import "./selectbox.css";
import { SelectBox } from "./SelectBox";

export const SelectBoxContainer = () => {
  const [optItems, setOptItems] = useState([
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 2,
      name: "task 2",
      status: false,
    },
    {
      id: 3,
      name: "task 3",
      status: false,
    },
    {
      id: 4,
      name: "task 4",
      status: false,
    },
    {
      id: 5,
      name: "task 5",
      status: false,
    },
    {
      id: 6,
      name: "trưởng",
      status: false,
    },
    {
      id: 7,
      name: "task 7",
      status: false,
    },
    {
      id: 8,
      name: "task 8",
      status: false,
    },
    {
      id: 9,
      name: "task 9",
      status: false,
    },
    {
      id: 10,
      name: "task 10",
      status: false,
    },
  ]);
  const handleChangeOptItems = (e, id) => {
    const newArr = optItems.map((optItem) => {
      if (optItem.id === id) {
        return { ...optItem, status: !optItem.status };
      }
      return optItem;
    });
    setOptItems(Array.from(newArr));
  };
  const handleDeleteOptItems = (e, id) => {
    const newArr = optItems.map((optItem) => {
      if (optItem.id === id) {
        return { ...optItem, status: !optItem.status };
      }
      return optItem;
    });
    setOptItems(Array.from(newArr));
  };
  const handleClearAll = (e) => {
    const newArr = optItems.map((optItem) => {
      return { ...optItem, status: false };
    });
    setOptItems(Array.from(newArr));
  };
  return (
    <div className="select-container">
      <SelectBox
        optItems={optItems}
        handleChangeOptItems={handleChangeOptItems}
        handleDeleteOptItems={handleDeleteOptItems}
        handleClearAll={handleClearAll}
      />
    </div>
  );
};
