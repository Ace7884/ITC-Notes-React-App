import React from "react";
import { useState } from "react";
import { MainHeader } from "./components/staticElements/MainHeader/MainHeader";
import { FormContainer } from "./components/layout/FormContainer/FormContainer";
import { NotesContainer } from "./components/layout/NoteContainer/NotesContainer";
import { Modal } from "./components/activeElements/Modal/Modal";
import { v4 as uuid } from "uuid";
import "./App.css";

export const App = () => {
  const [noteList, setNotes] = useState([]);

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      let removeNotesList = noteList.filter((note) => note.id !== id);
      setNotes(removeNotesList);
    }
  };

  const [noteTitle, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

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
      title: noteTitle,
      text: noteText,
    };

    let newNoteList = noteList.concat(newNote);
    setNotes(newNoteList);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const toggleModal = (noteId) => {
    let targetNote = noteList.filter((note) => note.id === noteId);
    setModalData([targetNote[0], ...modalData]);
    setIsModalOpen(true);
  };

  return (
    <div className="app">
      <MainHeader title="Stickey NotesApp" />
      <FormContainer
        noteTitleState={noteTitle}
        noteTextState={noteText}
        setNoteTitleFunc={setTitle}
        setNoteTextFunc={setNoteText}
        func={addNote}
      />
      <NotesContainer
        toggleModal={toggleModal}
        state={noteList}
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
