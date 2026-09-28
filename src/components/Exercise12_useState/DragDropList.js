import React, { useState } from "react";

function DragDropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDrop = (dropIndex) => {
    if (draggingItem === null || draggingItem === dropIndex) {
      setDraggingItem(null);
      return;
    }

    const newItems = [...items];
    const draggedItem = newItems.splice(draggingItem, 1)[0];
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div>
      <h3>Drag and Drop List</h3>

      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            onDragEnd={handleDragEnd}
            style={{
              padding: "10px",
              margin: "5px 0",
              border: "1px solid #ccc",
              cursor: "grab",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;
