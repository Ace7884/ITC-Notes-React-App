import React from "react";
import "../NoteTitle/NoteTitle.css";
//Text OverFlow container Debug pending

export const NoteTitle = ({
  title,
  noteTitleState,
  isModalOpen,
  updateTitle,
}) => {
  return (
    <div className="NoteTitle">
      <input
        value={noteTitleState}
        onChange={updateTitle}
        placeholder={title}
        disabled={isModalOpen ? false : true}
      ></input>
    </div>
  );
};
