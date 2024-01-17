import React, { useState } from "react";
import "./selectbox.css";
import { SelectBox } from "./SelectBox";

export const SelectBoxContainer = () => {
  const [optItems, setOptItems] = useState([
    {
      id: 1,
      name: "Công việc 1",
      status: false,
    },
    {
      id: 2,
      name: "Công việc 2",
      status: false,
    },
    {
      id: 3,
      name: "Công việc 3",
      status: false,
    },
    {
      id: 4,
      name: "Công việc 4",
      status: false,
    },
    {
      id: 5,
      name: "Công việc 5",
      status: false,
    },
    {
      id: 6,
      name: "Công việc 6",
      status: false,
    },
    {
      id: 7,
      name: "Công việc 7",
      status: false,
    },
    {
      id: 8,
      name: "Công việc 8",
      status: false,
    },
    {
      id: 9,
      name: "Công việc 9",
      status: false,
    },
    {
      id: 10,
      name: "Công việc 10",
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
    console.log("id", id);
    const newArr = optItems.map((optItem) => {
      if (optItem.id === id) {
        return { ...optItem, status: false };
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
