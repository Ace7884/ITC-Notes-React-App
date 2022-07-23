import React from "react";
import { WrapperBetween,NoteTitle,NoteText,NoteDate } from "components";
import "../Note/Note.css";

export const Note = ({
  id,
  newDate,
  newHour,
  hour,
  date,
  text,
  title,
  textareaComponent,
  deleteNote,
  buttonComponent,
  isNoteUpdated,
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
        newDate={newDate}
        newHour={newHour}
        hour={hour}
        date={date}
        id={id}
        isModalOpen={isModalOpen}
        isNoteUpdated={isNoteUpdated}
      />
      {!isModalOpen && title && (
        <NoteTitle title={title} isModalOpen={isModalOpen} />
      )}
      {!isModalOpen && <NoteText text={text} isModalOpen={isModalOpen} />}
      {isNoteUpdated && <NoteDate date={`Created ${date}`} hour={hour} />}
      {isModalOpen && textareaComponent}
      {isModalOpen && buttonComponent}
    </div>
  );
};
