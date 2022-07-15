import React from "react";
import "../wrapperBetween/wrapperBetween.css";
import { NoteDate } from "../../staticElements/NoteDate/NoteDate";
import { DeleteIcon } from "../../activeElements/DeleteIcon/DeleteIcon";

export const WrapperBetween = ({ deleteNote, hour, date, id, isModalOpen }) => {
  return (
    <div className="WrapperBetween">
      <NoteDate date={date} hour={hour} />
      {!isModalOpen && <DeleteIcon id={id} deleteNote={deleteNote} />}
    </div>
  );
};
