import React from "react";
import "../Button/Button.css";

export const Button = ({ text, func }) => {
  return (
    <button onClick={func} className="Button">
      {text}
    </button>
  );
};
