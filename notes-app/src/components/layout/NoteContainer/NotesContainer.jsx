import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "../NoteContainer/NotesContainer.css";

export const NotesContainer = ({
  noteList,
  deleteNote,
  toggleModal,
  isModalOpen,
}) => {
  return (
    <div className="NotesContainer">
      {noteList.map((noteItem) => {
        return (
          <Note
            key={noteItem.key}
            id={noteItem.id}
            hour={noteItem.hour}
            newHour={noteItem.newHour}
            date={noteItem.date}
            newDate={noteItem.newDate}
            text={noteItem.text}
            title={noteItem.title}
            isNoteUpdated={noteItem.isNoteUpdated}
            isModalOpen={isModalOpen}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
          />
        );
      })}
      ;
    </div>
  );
};
