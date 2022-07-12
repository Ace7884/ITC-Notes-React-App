import React from "react";
import { WrapperBetween } from "../../layout/wrapperBetween/WrapperBetween";
import "../Note/Note.css";
import { ModalClickableArea } from "../../layout/ModalClickableArea/ModalClickableArea";

export const Note = ({
  text,
  title,
  id,
  deleteNote,
  toggleModal,
  hour,
  date,
}) => {
  return (
    <div className="Note">
      <WrapperBetween deleteNote={deleteNote} hour={hour} date={date} id={id} />
      <ModalClickableArea
        text={text}
        title={title}
        id={id}
        toggleModal={toggleModal}
      />
    </div>
  );
};
