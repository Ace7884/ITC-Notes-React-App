import React from "react";
import "../Button/Button.css";

export const Button = ({ text, func, noteTextState }) => {
  return (
    <button onClick={noteTextState ? func : ""} className="Button">
      {text}
    </button>
  );
};
