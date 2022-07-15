import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "../NoteContainer/NotesContainer.css";

export const NotesContainer = ({
  noteList,
  deleteNote,
  isModalOpen,
  toggleModal,
}) => {
  return (
    <div className="NotesContainer">
      {noteList.map((noteitem) => {
        return (
          <Note
            key={noteitem.key}
            id={noteitem.id}
            hour={noteitem.hour}
            date={noteitem.date}
            text={noteitem.text}
            title={noteitem.title}
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
