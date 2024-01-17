import React, { useState } from "react";
import "./selectbox.css";
import { SelectBox } from "./SelectBox";

export const SelectBoxContainer = () => {
  const [optItem, setOptItem] = useState([
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
    {
      id: 1,
      name: "task 1",
      status: false,
    },
  ]);
  return (
    <div className="select-container">
      <SelectBox />
    </div>
  );
};
