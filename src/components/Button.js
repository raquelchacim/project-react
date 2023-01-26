import React, { useState } from "react";

export default function Button({ onClick, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "14px 27px",
        gap: "18px",
        height: "40px",
        color: isHovered ? "#000" : "#fff",
        background: isHovered ? "#fff" : "#000",
        border: isHovered ? "2px solid #000" : "none",
        borderRadius: "38px",
        cursor: "pointer",
        boxShadow: isActive ? "inset 0 0 50px #d7d7d7" : "none",
      }}
    >
      {children}
    </button>
  );
}
