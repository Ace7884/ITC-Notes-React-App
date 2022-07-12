import React from "react";
import { Button } from "../../activeElements/Button/Button";
import { TextArea } from "../../activeElements/TextArea/TextArea";
import "../FormContainer/FormContainer.css";

export const FormContainer = ({
  func,
  noteTitleState,
  noteTextState,
  setNoteTitleFunc,
  setNoteTextFunc,
}) => {
  return (
    <div className="FormContainer">
      <TextArea
        noteTitleState={noteTitleState}
        noteTextState={noteTextState}
        setTitle={setNoteTitleFunc}
        setNoteText={setNoteTextFunc}
      />
      <Button func={func} noteTextState={noteTextState} text="Add Note" />
    </div>
  );
};
