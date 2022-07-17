import React from "react";
import "../NoteText/NoteText.css";

export const NoteText = ({ text, isModalOpen, updateNoteText }) => {
  return (
    <div className="NoteText">
      <textarea
        value={text}
        onChange={updateNoteText}
        disabled={isModalOpen ? false : true}
      ></textarea>
    </div>
  );
};
