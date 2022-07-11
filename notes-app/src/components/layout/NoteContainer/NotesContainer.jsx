import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "../NoteContainer/NotesContainer.css";

export const NotesContainer = ({state, deleteNote,toggleModal}) => {
  
  return (
    <div className="NotesContainer">
      {state.map((noteitem,index) => {
        console.log(noteitem);
        return <Note key={noteitem.key} id={noteitem.id} titleNum={index+1} text='Example Note'   deleteNote={deleteNote} toggleModal={toggleModal} /> ;
      })}
      ;
    </div>
  );
};
