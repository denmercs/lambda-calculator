import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = props => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numberBtn">{props.numbersMap}</button>
    </div>
  );
};

export default NumberButton;
