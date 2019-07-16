import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials";
import Logo from "../DisplayComponents/Logo";

const Display = () => {
  return (
    <div className="calculatorContainer">
      {/* Display any props data here */}
      <div className="calculatorLogo">
        <Logo />
      </div>

      <div className="calculatorButtons">
        <div>
          <Specials />
          <Numbers className="numbersBtn" />
        </div>
        <div>
          <Operators />
        </div>
      </div>
    </div>
  );
};

export default Display;
