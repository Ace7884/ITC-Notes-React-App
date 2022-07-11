import React from "react";
import { NoteText } from "../NoteText/NoteText";
import { NoteTitle } from "../NoteTitle/NoteTitle";
import { NoteDate } from "../../layout/NoteContainer/NoteDate/NoteDate";
import { DeleteIcon } from "../../activeElements/DeleteIcon/DeleteIcon";
import "../Note/Note.css";

export const Note = ({text,id,deleteNote,toggleModal}) => {
  return (
    <div className="Note">
      <DeleteIcon key={id} id={id} deleteNote={deleteNote}/>
      {/* <div className="modalClickableArea"  > */}
        <NoteDate/>
        <NoteTitle title='Note Title'/>
        <NoteText text={text}/>
      </div>
    // </div>
  );
};


// onClick={toggleModal}