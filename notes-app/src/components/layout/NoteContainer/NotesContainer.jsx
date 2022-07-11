import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "../NoteContainer/NotesContainer.css";

export const NotesContainer = ({state}) => {
  const title = [];
  state.forEach((note , index) => {
    title.push(`Note Title ${index}`);
  });

  return (
    <div className="NotesContainer">
      {state.map((noteitem,index) => {
        return <Note key={noteitem.key} id={noteitem.id} title={title[index]} text='Example Note' func={noteitem.func}/> ;
      })}
      ;
    </div>
  );
};
