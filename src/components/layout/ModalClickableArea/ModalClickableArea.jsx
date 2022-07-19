import React from "react";
import "../ModalClickableArea/ModalClickableArea.css";
import { NoteTitle } from "../../staticElements/NoteTitle/NoteTitle";
import { NoteText } from "../../staticElements/NoteText/NoteText";

export const ModalClickableArea = ({ text, title, id, toggleModal }) => {
  return (
    <div className="ModalClickableArea" onClick={() => toggleModal(id)}>
      <NoteTitle title={title} />
      <NoteText text={text} />
    </div>
  );
};
