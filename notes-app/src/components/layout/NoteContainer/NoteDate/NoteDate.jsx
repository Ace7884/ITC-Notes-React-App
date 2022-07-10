import React from "react";
import "../NoteDate/NoteDate.css";

export const NoteDate = () => {
  let date = new Date();
  let hour = date.toLocaleTimeString("en-Us");
  date = date.toDateString();
  return (
    <div className="NoteDate">
      <span>{date}</span>
      <span>{hour}</span>
    </div>
  );
};
