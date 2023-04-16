import DrugDrop from "./DrugDrop/DrugDrop";
import Item from "./Item/Item";
import DrugDropTo from "./DrugDropTo/DrugDropTo";

import React, { useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  //const [elements, setElements] = useState([]);
  const [draggedElements, setDraggedElements] = useState([]);

  const [elements, setElements] = useState([
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
  ]);

  const handleDrop = (itemId) => {
    console.log("Dropped item:", itemId); // Add this line

    setElements([...elements.filter((element) => element.id !== itemId.id)]);

    setDraggedElements([
      ...draggedElements,
      ...elements.filter((element) => element.id === itemId.id),
    ]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "100px",
          margin: "100px",
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <DrugDrop elements={elements}>
            {elements.map((element) => (
              <Item key={element.id} data={element} />
            ))}
          </DrugDrop>
          <DrugDropTo onDropHandler={handleDrop}>
            {draggedElements.map((item) => (
              <Item key={item.id} data={item} />
            ))}
          </DrugDropTo>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
