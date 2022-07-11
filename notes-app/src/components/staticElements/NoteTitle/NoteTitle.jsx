import React from "react";
import "../NoteTitle/NoteTitle.css";

export const NoteTitle = ({title}) => {
  return (
    <div className="NoteTitle">
      <h3>{title}</h3>
    </div>
  );
};
