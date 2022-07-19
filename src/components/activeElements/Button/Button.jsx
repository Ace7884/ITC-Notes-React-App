import React from "react";
import "../Button/Button.css";
import "../Button/NoteButton.css";

export const Button = ({ text, func, noteTextState }) => {
  return (
    <button onClick={noteTextState.length > 0 ? func : null} className="Button">
      {text}
    </button>
  );
};
