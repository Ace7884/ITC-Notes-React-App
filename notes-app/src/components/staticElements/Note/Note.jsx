import React from "react";
import { NoteText } from "../NoteText/NoteText";
import { NoteTitle } from "../NoteTitle/NoteTitle";
import { NoteDate } from "../../layout/NoteContainer/NoteDate/NoteDate";
import { DeleteIcon } from "../../activeElements/DeleteIcon/DeleteIcon";
import "../Note/Note.css";

export const Note = ({text,title,id,func}) => {
  return (
    <div className="Note">
      <DeleteIcon func={func} id={id}/>
      <NoteDate />
      <NoteTitle title={title}/>
      <NoteText text={text} />
    </div>
  );
};
