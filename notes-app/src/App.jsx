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
    setTitle("");
    setNoteText("");
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
        setTitle={setTitle}
        setNoteText={setNoteText}
        addNote={addNote}
      />
      <NotesContainer
        noteList={noteList}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
      />
      {isModalOpen && (
        <Modal
          information={modalData[0]}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default App;

export const extendTextArea = (event) => {
  event.target.style.height = "inherit";
  event.target.style.height = `${event.target.scrollHeight}px`;
};
