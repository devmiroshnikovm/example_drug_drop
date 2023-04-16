import React from "react";
import "./Item.css";
import { useDrag } from "react-dnd";

const Item = (props) => {
  const { id, content } = props.data;

  const [{ isDrag }, dragRef] = useDrag({
    type: "animal",
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    !isDrag && (
      <>
        <div className="item" ref={dragRef}>
          {content}
        </div>
      </>
    )
  );
};

export default Item;
