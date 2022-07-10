import React from "react";
import { Button } from "../../activeElements/Button/Button";
import { TextArea } from "../../activeElements/TextArea/TextArea";
import "../FormContainer/FormContainer.css";

export const FormContainer = ({ func }) => {
  return (
    <div className="FormContainer">
      <TextArea />
      <Button func={func} text="Add Note" />
    </div>
  );
};
