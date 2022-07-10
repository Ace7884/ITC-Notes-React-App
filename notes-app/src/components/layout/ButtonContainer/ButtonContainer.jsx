import React from "react"
import "../ButtonContainer/ButtonContainer.css"
import { Button } from "../../activeElements/Button/Button"


export const ButtonContainer =({func,func2})=>{

return(
  <div className="ButtonContainer">
    <Button func={func} text="Add Note" />
    <Button func={func2} text="Delete Note"/>
  </div>
)
}