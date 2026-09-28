import React, { useState } from "react";

function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h3>Toggle Visibility</h3>

      {visible && <p>This text is now visible.</p>}

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default ToggleVisibility;
