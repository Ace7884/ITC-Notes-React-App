import React from "react";
import { useState } from "react";
import { MainHeader } from "./components/staticElements/MainHeader/MainHeader";
import { FormContainer } from "./components/layout/FormContainer/FormContainer";
import { NotesContainer } from "./components/layout/NoteContainer/NotesContainer";
// import Modal from "./components/activeElements/Modal/Modal";
import { v4 as uuid } from "uuid";
import "./App.css";

export const App = () => {
  const [notelist, setNotes] = useState([]);
  // const [ismodalOpen, setIsModalOpen] = useState(false);

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      let removeNotesList = notelist.filter((note) => note.id !== id);
      setNotes(removeNotesList);
    }
  };

  const addNote = () => {
    let id = uuid();
    const newNote = {
      id,
      key: id,
    };

    notelist.push(newNote);
    setNotes([...notelist]);
  };

  return (
    <div className="app">
      <MainHeader title="Stickey NotesApp" />
      <FormContainer func={addNote} />
      <NotesContainer state={notelist} deleteNote={deleteNote} />
      {/* {ismodalOpen && <Modal setIsModalOpen={setIsModalOpen} />} */}
    </div>
  );
};

export default App;

// toggleModal={setIsModalOpen}
