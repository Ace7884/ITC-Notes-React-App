import React from "react";
import { Button } from "../../activeElements/Button/Button";
import { TextArea } from "../../activeElements/TextArea/TextArea";
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
