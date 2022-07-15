import React from "react";
import { IoClose } from "react-icons/io5";
import "../DeleteIcon/DeleteIcon.css";

export const DeleteIcon = ({ id, deleteNote }) => {
  return (
    <div className="DeleteIcon">
      <IoClose onClick={() => deleteNote(id)}></IoClose>
    </div>
  );
};
