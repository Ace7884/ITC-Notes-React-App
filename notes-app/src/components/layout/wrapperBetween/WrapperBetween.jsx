import React from "react";
import "../wrapperBetween/wrapperBetween.css";
import { NoteDate } from "../../layout/NoteContainer/NoteDate/NoteDate";
import { DeleteIcon } from "../../activeElements/DeleteIcon/DeleteIcon";

export const WrapperBetween = ({ deleteNote, hour, date, id }) => {
  return (
    <div className="WrapperBetween">
      <NoteDate date={date} hour={hour} />
      <DeleteIcon key={id} id={id} deleteNote={deleteNote} />
    </div>
  );
};
