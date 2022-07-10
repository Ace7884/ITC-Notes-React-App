import React from "react";
import { TextArea } from "../../activeElements/TextArea/TextArea";
import { ButtonContainer } from "../ButtonContainer/ButtonContainer";
import "../FormContainer/FormContainer.css";

export const FormContainer = ({func,func2}) => {
  return (
    <div className="FormContainer">
      <TextArea />
      <ButtonContainer func={func} func2={func2}/>
    </div>
  );
};
