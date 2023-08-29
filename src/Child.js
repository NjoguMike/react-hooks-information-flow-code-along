import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, onColor }) {

  function handleCLick(){

    const newColor = getRandomColor()
    onChangeColor(newColor)
    
  }
  
  return <div className="child" style={{ backgroundColor: onColor }} onClick={handleCLick}/>;
}

export default Child;
