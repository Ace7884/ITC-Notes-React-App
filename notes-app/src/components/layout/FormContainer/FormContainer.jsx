import React from "react";
import { Button,TextArea } from "components";
import "../FormContainer/FormContainer.css";

export const FormContainer = ({
  noteTitleState,
  noteTextState,
  updateTitle,
  updateNoteText,
  addNote,
}) => {
  return (
    <div className="FormContainer">
      <TextArea
        noteTitleState={noteTitleState}
        noteTextState={noteTextState}
        updateTitle={updateTitle}
        updateNoteText={updateNoteText}
      />
      <Button func={addNote} noteTextState={noteTextState} text="Add Note" />
    </div>
  );
};
