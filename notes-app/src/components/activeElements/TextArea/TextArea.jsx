import React from "react";
import "../TextArea/TextArea.css";
import "../../staticElements/Note/TextAreaNote.css";
import "../../staticElements/Note/Note.css";
import "../../staticElements/NoteTitle/NoteTitle.css";
import "../../staticElements/NoteText/NoteText.css";

export const TextArea = ({
  noteTitleState,
  noteTextState,
  updateTitle,
  updateNoteText,
  updatedNoteTitle,
  updatedNoteText,
  updateNewTitle,
  updateNewNoteText,

  title,
  text,
  isModalOpen,
}) => {
  return (
    <div className={isModalOpen ? "TextAreaNote" : "TextArea"}>
      <input
        className={isModalOpen ? "NoteTitle" : null}
        // toggle attributes pending state
        {...(isModalOpen
          ? { value: updatedNoteTitle }
          : { value: noteTitleState })}
        {...(isModalOpen
          ? { onChange: updateNewTitle }
          : { onChange: updateTitle })}
        placeholder={isModalOpen && title ? title : ""}
      ></input>
      <textarea
        className={isModalOpen ? "NoteText" : null}
        // toggle attributes pending state
        {...(isModalOpen
          ? { value: updatedNoteText }
          : { value: noteTextState })}
        {...(isModalOpen
          ? { onChange: updateNewNoteText }
          : { onChange: updateNoteText })}
        placeholder={isModalOpen ? text : ""}
      ></textarea>
    </div>
  );
};
