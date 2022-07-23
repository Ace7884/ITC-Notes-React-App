import React from "react";
import { NoteDate,DeleteIcon } from "components";
import "../wrapperBetween/wrapperBetween.css";


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
