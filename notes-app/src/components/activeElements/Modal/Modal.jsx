import React from "react";
import { Note } from "../../staticElements/Note/Note";
import { TextArea } from "../TextArea/TextArea";
import "./Modal.css";

export let Modal = ({
  information,
  setIsModalOpen,
  isModalOpen,
  updateNote,
  updateNewNoteText,
  updateNewTitle,
  updatedNoteTitle,
  updatedNoteText,
}) => {
  return (
    <div
      className="modalBackground"
      onClick={(event) =>
        event.target.tagName === "DIV" ? setIsModalOpen(false) : null
      }
    >
      <Note
        date={information.date}
        hour={information.hour}
        isModalOpen={isModalOpen}
        textareaComponent={
          <TextArea
            title={information.title}
            text={information.text}
            updateNewNoteText={updateNewNoteText}
            updateNewTitle={updateNewTitle}
            updatedNoteTitle={updatedNoteTitle}
            updatedNoteText={updatedNoteText}
            isModalOpen={isModalOpen}
          />
        }
        buttonComponent={
          <button
            className="NoteButton"
            onClick={() => updateNote(information.id)}
          >
            UpdateNote
          </button>
        }
      />
    </div>
  );
};
