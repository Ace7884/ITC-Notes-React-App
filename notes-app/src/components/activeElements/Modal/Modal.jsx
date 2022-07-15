import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "./Modal.css";

export let Modal = ({ information, setIsModalOpen, isModalOpen }) => {
  return (
    <div
      className="modalBackground"
      onClick={(event) =>
        event.target.tagName === "DIV" ? setIsModalOpen(false) : null
      }
    >
      <div>
        <Note
          date={information.date}
          hour={information.hour}
          text={information.text}
          title={information.title}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  );
};
