import React from "react";
// import { v4 as uuid } from 'uuid';
import { Note } from "../../staticElements/Note/Note";
import "../NoteContainer/NotesContainer.css";
//debug key error later

export const NotesContainer = ({ state }) => {
  return (
    <div className="NotesContainer">
      {state.map((note) => {
        /* return <Note key={uuid()}/> */
        return <Note />;
      })}
      ;
    </div>
  );
};
