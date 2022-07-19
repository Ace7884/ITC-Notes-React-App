import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
// import localforage from 'localforage' 
import { MainHeader } from "./components/staticElements/MainHeader/MainHeader";
import { FormContainer } from "./components/layout/FormContainer/FormContainer";
import { NotesContainer } from "./components/layout/NoteContainer/NotesContainer";
import { Modal } from "./components/activeElements/Modal/Modal";
import { v4 as uuid } from "uuid";
import "./App.css";

export const App = () => {
 
  const [noteList, setNotes] = useState([]);
  
  
  // useEffect(() => {
       
  //     let storedNotes= await localforage.getItem('NoteStorage');
  //     if (localforage.length>0){
  //       setNotes(storedNotes);
  //     }
  //     console.log(storedNotes);
  //     console.log(noteList);
  //   }
  //   ,[noteList]);
  
  

  
  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      let removeNotesList = noteList.filter((note) => note.id !== id);
      setNotes(removeNotesList);
      // removeStoredNotes(id);
    }
  };

  const [noteTitle, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };
  const updateNoteText = (event) => {
    setNoteText(event.target.value);
    extendTextArea(event);
  };

  const addNote = () => {
    let id = uuid();
    let date = new Date();
    let hour = date.toLocaleTimeString("en-Us");
    date = date.toDateString();
    const newNote = {
      id,
      key: id,
      isNoteUpdated: false,
      date,
      hour,
      newHour: "template",
      newDate: "template",
      title: noteTitle,
      text: noteText,
    };
    let newNoteList = noteList.concat(newNote);
    // storeNotes(id,newNote);
    setNotes(newNoteList);
    setTitle("");
    setNoteText("");
  };

  // const storeNotes = ()=>{
  //   localforage.setItem('NoteStorage',noteList);
   
  // }

  // const removeStoredNotes = (id)=>{
  //   localforage.removeItem(id);
  // }

  // const getStoredNotes  = async () =>{
  //   let storedNotes =   localforage.iterate(async (value, key ,index) =>{
  //     return  value;
  //   }); 
  //   console.log(storedNotes);
    
  // }

  const [updatedNoteTitle, setUpdatedNoteTitle] = useState("");
  const [updatedNoteText, setUpdatedNoteText] = useState("");

  const updateNewTitle = (event) => {
    setUpdatedNoteTitle(event.target.value);
  };
  const updateNewNoteText = (event) => {
    setUpdatedNoteText(event.target.value);
  };

  const updateNote = (id) => {
    // removeStoredNotes(id);
    let newDate = new Date();
    let newHour = newDate.toLocaleTimeString("en-Us");
    newDate = `Modified ${newDate.toDateString()}`;
    let updatedNote = noteList.filter((note) => note.id === id);
    updatedNote[0].isNoteUpdated = true;
    updatedNote[0].title = updatedNoteTitle;
    updatedNote[0].text = updatedNoteText;
    updatedNote[0].newDate = newDate;
    updatedNote[0].newHour = newHour;
    // storeNotes(id,updatedNote[0]);
    setIsModalOpen(false);
    setUpdatedNoteText("");
    setUpdatedNoteTitle("");
    // storeNotes();
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
        updateTitle={updateTitle}
        updateNoteText={updateNoteText}
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
          noteTitleState={noteTitle}
          noteTextState={noteText}
          updateTitle={updateTitle}
          setNoteText={setNoteText}
          updateNewNoteText={updateNewNoteText}
          updateNewTitle={updateNewTitle}
          updatedNoteTitle={updatedNoteTitle}
          updatedNoteText={updatedNoteText}
          updateNote={updateNote}
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
