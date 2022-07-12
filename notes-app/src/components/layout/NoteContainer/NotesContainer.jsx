import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "../NoteContainer/NotesContainer.css";

export const NotesContainer = ({ state, deleteNote, toggleModal }) => {
  return (
    <div className="NotesContainer">
      {state.map((noteitem) => {
        return (
          <Note
            key={noteitem.key}
            id={noteitem.id}
            hour={noteitem.hour}
            date={noteitem.date}
            text={noteitem.text}
            title={noteitem.title}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
          />
        );
      })}
      ;
    </div>
  );
};
