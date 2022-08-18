import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);
  const textChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello World</h1>
      {!changedText && <Output>It's Good to see you</Output>}
      {changedText && <Output>Text Changed</Output>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
};

export default Greetings;
