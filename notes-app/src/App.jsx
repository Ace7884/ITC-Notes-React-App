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
    const newNote = <Note />;
    notelist.push(newNote);
    setNotes([...notelist]);
  };

  const deleteNote = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      notelist.splice(-1);
      setNotes([...notelist]);
    }
  };

  return (
    <div className="app">
      <MainHeader title="Stickey NotesApp" />
      <FormContainer func={addNote} func2={deleteNote} />
      <NotesContainer state={notelist} />
    </div>
  );
};

export default App;
