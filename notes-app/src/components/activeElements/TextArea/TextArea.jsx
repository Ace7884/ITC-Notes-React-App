import React from "react";
import "../TextArea/TextArea.css";

export const TextArea = ({
  noteTitleState,
  noteTextState,
  setTitle,
  setNoteText,
}) => {
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateNoteText = (event) => {
    setNoteText(event.target.value);
  };

  return (
    <div className="TextArea">
      <input
        value={noteTitleState}
        onChange={updateTitle}
        placeholder="Title here.."
      ></input>
      <textarea
        value={noteTextState}
        onChange={updateNoteText}
        placeholder="Your Note Here.."
      ></textarea>
    </div>
  );
};
