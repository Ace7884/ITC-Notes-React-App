import React from "react";
import { Note } from "../../staticElements/Note/Note";
import "./Modal.css";

export let Modal = ({ information, modalStatus }) => {
  return (
    <div
      className="modalBackground"
      onClick={() => {
        modalStatus(false);
      }}
    >
      <div>
        <Note
          date={information.date}
          hour={information.hour}
          text={information.text}
          title={information.title}
        />
      </div>
    </div>
  );
};
