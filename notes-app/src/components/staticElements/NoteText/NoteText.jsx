import React from "react";

import "../NoteText/NoteText.css";
//Debug later Text Overflow
export const NoteText = ({ text }) => {
  return (
    <div className="NoteText">
      <p>{text}</p>
    </div>
  );
};
