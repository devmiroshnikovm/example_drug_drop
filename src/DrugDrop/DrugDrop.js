import React from "react";
import "./DrugDrop.css";
import Item from "../Item/Item";

const DrugDrop = ({ children }) => {
  return <div className="drug-drop">{children}</div>;
};

export default DrugDrop;
