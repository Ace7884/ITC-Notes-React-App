import React from "react";
import "../NoteTitle/NoteTitle.css";

export const NoteTitle = ({ titleText }) => {
  return (
    <div className="NoteTitle">
      <h3>{titleText}</h3>
    </div>
  );
};
