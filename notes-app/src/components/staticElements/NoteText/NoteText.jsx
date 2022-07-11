import React from "react";
import "../NoteText/NoteText.css";
//Text OverFlows container Debug later

export const NoteText = ({ text }) => {
 
  return (
    <div className="NoteText">
      <p>{text}</p>
    </div>
  );
};
