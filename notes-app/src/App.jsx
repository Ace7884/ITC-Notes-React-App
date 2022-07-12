import React from "react";
import { useState } from "react";
import { MainHeader } from "./components/staticElements/MainHeader/MainHeader";
import { FormContainer } from "./components/layout/FormContainer/FormContainer";
import { NotesContainer } from "./components/layout/NoteContainer/NotesContainer";
import { Modal } from "./components/activeElements/Modal/Modal";
import { v4 as uuid } from "uuid";
import "./App.css";

export const App = () => {
  const [notelist, setNotes] = useState([]);

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      let removeNotesList = notelist.filter((note) => note.id !== id);
      setNotes(removeNotesList);
    }
  };

  const addNote = () => {
    let id = uuid();
    let date = new Date();
    let hour = date.toLocaleTimeString("en-Us");
    date = date.toDateString();
    const newNote = {
      id,
      key: id,
      hour,
      date,
      title: "Note Title",
      text: "Note Example",
    };

    notelist.push(newNote);
    setNotes([...notelist]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const toggleModal = (noteId) => {
    let targetNote = notelist.filter((note) => note.id === noteId);
    setModalData([targetNote[0], ...modalData]);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <MainHeader title="Stickey NotesApp" />
      <FormContainer func={addNote} />
      <NotesContainer
        toggleModal={toggleModal}
        state={notelist}
        deleteNote={deleteNote}
      />
      {isModalOpen && (
        <Modal
          state={isModalOpen}
          information={modalData[0]}
          modalStatus={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default App;
