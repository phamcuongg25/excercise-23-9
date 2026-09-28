import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h3>Color Switcher</h3>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          backgroundColor: color,
          width: "300px",
          height: "100px",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default ColorSwitcher;
