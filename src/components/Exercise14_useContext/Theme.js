import React from "react";
import { useTheme } from "./ThemeContext";

function Theme() {
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: "30px",
      }}
    >
      <h3>Theme: {themeName}</h3>

      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          border: "1px solid",
          padding: "10px 20px",
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Theme;
