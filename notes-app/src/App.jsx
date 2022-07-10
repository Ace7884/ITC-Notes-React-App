import React from "react";
import { useState } from "react";
import { MainHeader } from "./components/staticElements/MainHeader/MainHeader";
import { FormContainer } from "./components/layout/FormContainer/FormContainer";
import { NotesContainer } from "./components/layout/NoteContainer/NotesContainer";
import { Note } from "./components/staticElements/Note/Note";
import "./App.css";

export const App = () => {
  const [notelist, setNotes] = useState([]);

  const addNote = () => {
    const newNote = 
     <Note/>
    setNotes([newNote, ...notelist]);
  };

  return (
    <div className="app">
      <MainHeader title="Stickey NotesApp" />
      <FormContainer func={addNote} />
      <NotesContainer state={notelist} />
    </div>
  );
};

export default App;
