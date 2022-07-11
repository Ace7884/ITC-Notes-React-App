import React from "react";
import { IoClose } from "react-icons/io5";
import "../DeleteIcon/DeleteIcon.css";

export const DeleteIcon = ({func,id}) => {
  return (
    <div className="DeleteIcon">
    <IoClose onClick={func} id={id}></IoClose>
    </div>
  );
};