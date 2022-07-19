import React from "react";
import "../wrapperBetween/wrapperBetween.css";
import { NoteDate } from "../../staticElements/NoteDate/NoteDate";
import { DeleteIcon } from "../../activeElements/DeleteIcon/DeleteIcon";

export const WrapperBetween = ({
  deleteNote,
  newDate,
  newHour,
  hour,
  date,
  id,
  isModalOpen,
  isNoteUpdated,
}) => {
  return (
    <div className="WrapperBetween">
      <NoteDate
        {...(isNoteUpdated ? { date: newDate } : { date: date })}
        {...(isNoteUpdated ? { hour: newHour } : { hour: hour })}
      />
      {!isModalOpen && <DeleteIcon id={id} deleteNote={deleteNote} />}
    </div>
  );
};
