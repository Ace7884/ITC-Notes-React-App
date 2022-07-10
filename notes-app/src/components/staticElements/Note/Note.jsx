import React from "react";
import { NoteText } from "../NoteText/NoteText";
import { NoteDate } from "../../layout/NoteContainer/NoteDate/NoteDate";
import "../Note/Note.css";

export const Note = () => {
  return (
    <div className="Note">
      <NoteDate />
      <NoteText text="Example note" />
    </div>
  );
};
