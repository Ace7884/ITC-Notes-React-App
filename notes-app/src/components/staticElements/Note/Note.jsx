import React from "react";
import { WrapperBetween } from "../../layout/wrapperBetween/WrapperBetween";
import { NoteTitle } from "../NoteTitle/NoteTitle";
import { NoteText } from "../NoteText/NoteText";
import "../Note/Note.css";

export const Note = ({
  id,
  hour,
  date,
  text,
  title,
  deleteNote,
  isModalOpen,
  toggleModal,
}) => {
  const noteController = (event) => {
    if (!isModalOpen && event.target.tagName !== "svg") {
      toggleModal(id);
    }
  };

  return (
    <div className="Note" onClick={noteController}>
      <WrapperBetween
        deleteNote={deleteNote}
        hour={hour}
        date={date}
        id={id}
        isModalOpen={isModalOpen}
      />
      <NoteTitle title={title} />
      <NoteText text={text} />
    </div>
  );
};
