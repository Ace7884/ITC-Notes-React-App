import React from "react";
import "../MainHeader/MainHeader.css";

export const MainHeader = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};
