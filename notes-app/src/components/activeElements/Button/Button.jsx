import React from "react";
import "../Button/Button.css";

export const Button = ({ text, addNote, noteTextState }) => {
  return (
    <button
      onClick={noteTextState.length > 0 ? addNote : null}
      className="Button"
    >
      {text}
    </button>
  );
};
