import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "./Modal.css";

function Modal({ setIsModalOpen }) {
  return (
    <div className="modalBackground" onClick={() => {
      setIsModalOpen(false);
    }}>
      <div className="titleCloseBtn">
      <Note/>
      </div>
    </div>
  );
}

export default Modal;
