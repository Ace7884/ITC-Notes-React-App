import React from "react";
import "../NoteDate/NoteDate.css";

export const NoteDate = () => {
  let date = new Date();
  date = date.toLocaleDateString();

  return (
    <div className="NoteDate">
      <p>{date}</p>
    </div>
  );
};
