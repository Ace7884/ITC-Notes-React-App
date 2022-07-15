import React from "react";
import "../NoteText/NoteText.css";
//Text OverFlow container Debug pending

export const NoteText = ({ text }) => {
  return (
    <div className="NoteText">
      <textarea value={text} disabled={true}></textarea>
    </div>
  );
};
