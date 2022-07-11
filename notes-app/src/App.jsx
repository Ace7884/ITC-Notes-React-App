import React from "react";
import { useState } from "react";
import { MainHeader } from "./components/staticElements/MainHeader/MainHeader";
import { FormContainer } from "./components/layout/FormContainer/FormContainer";
import { NotesContainer } from "./components/layout/NoteContainer/NotesContainer";
import { v4 as uuid } from "uuid";

import "./App.css";

export const App = () => {
  const [notelist, setNotes] = useState([]);

  //Feature incomplete pending completion
  const deleteNote = (e) => {
    // if (window.confirm("Are you sure you want to delete your note?")) {
    //  setNotes(notelist.filter((note) => note.id !== e.currentTarget.id));
    // notelist.splice(notelist.indexOf(notelist), 1);
    // setNotes([...notelist]);
    // let newNoteList = notelist.filter((note, index) => index !== note);
    // setNotes(newNoteList);
  };

  const addNote = () => {
    let id = uuid();
    const newNote = {
      id,
      key: id,
      func:deleteNote,
    };

    notelist.push(newNote);
    setNotes([...notelist]);
  };

  return (
    <div className="app">
      <MainHeader title="Stickey NotesApp" />
      <FormContainer func={addNote} />
      <NotesContainer state={notelist} func={deleteNote} />
    </div>
  );
};

export default App;
