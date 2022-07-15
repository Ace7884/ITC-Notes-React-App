import React from "react";
import "../NoteTitle/NoteTitle.css";
//Text OverFlow container Debug pending

export const NoteTitle = ({ title }) => {
  return (
    <div className="NoteTitle">
      <h2>{title}</h2>
    </div>
  );
};
