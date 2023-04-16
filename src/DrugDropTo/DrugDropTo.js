import React from "react";
import "./DrugDropTo.css";
import { useDrop } from "react-dnd";

const DrugDropTo = ({ children, onDropHandler, draggedElements }) => {
  const [{ isHover }, dropTarget] = useDrop({
    accept: "animal",
    drop(itemId) {
      onDropHandler(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const borderColor = isHover ? "lightgreen" : "transparent";

  return (
    <div
      className="drug-drop"
      ref={dropTarget}
      style={{
        borderColor: borderColor,
        borderWidth: "10px",
        borderStyle: "solid",
      }}
    >
      {children}
    </div>
  );
};

export default DrugDropTo;
