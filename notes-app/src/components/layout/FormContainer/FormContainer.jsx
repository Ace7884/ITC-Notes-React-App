import React from "react";
import { Button } from "../../activeElements/Button/Button";
import { TextArea } from "../../activeElements/TextArea/TextArea";
import "../FormContainer/FormContainer.css";

export const FormContainer = ({
  noteTitleState,
  noteTextState,
  setTitle,
  setNoteText,
  addNote,
}) => {
  return (
    <div className="FormContainer">
      <TextArea
        noteTitleState={noteTitleState}
        noteTextState={noteTextState}
        setTitle={setTitle}
        setNoteText={setNoteText}
      />
      <Button addNote={addNote} noteTextState={noteTextState} text="Add Note" />
    </div>
  );
};
