import React from "react";
import "../TextArea/TextArea.css";
import { extendTextArea } from "../../../App";

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
    extendTextArea(event);
  };

  return (
    <div className="TextArea">
      <input
        value={noteTitleState}
        onChange={updateTitle}
        placeholder="Your Title here..."
      ></input>
      <textarea
        value={noteTextState}
        onChange={updateNoteText}
        placeholder="Your Note Here..."
      ></textarea>
    </div>
  );
};
