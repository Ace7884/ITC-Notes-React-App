import React from "react";
import "../NoteTitle/NoteTitle.css";
//Text OverFlow container Debug pending
export const NoteTitle = ({ title }) => {
  return (
    <div className="NoteTitle">
      <h4>{title}</h4>
    </div>
  );
};
