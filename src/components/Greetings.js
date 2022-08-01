import React, { useState } from "react";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);
  const textChangeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello World</h1>
      {!changedText && <p>It's Good to see you</p>}
      {changedText && <p>Text Changed</p>}
      <button onClick={textChangeHandler}>Change Text</button>
    </div>
  );
};

export default Greetings;
