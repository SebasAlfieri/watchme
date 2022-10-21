import React from "react";
import "./login.css";

function LoginInputText(props) {
  let { text, type } = props;

  function handleInput(evt) {
    let target = evt.target;
    let value = evt.key.toLowerCase();
    let invalidKeys = [
      "(",
      ")",
      ">",
      "<",
      "@",
      ",",
      ";",
      ":",
      '"',
      "[",
      "]",
      "ç",
      "%",
      "&",
    ];

    if (invalidKeys.includes(value)) {
      evt.preventDefault();
    }
  }

  return (
    <div className="inputLoginDiv">
      <input
        onKeyDown={handleInput}
        className="inputLogin"
        type={type}
        placeholder={text}
      />
    </div>
  );
}

export default LoginInputText;
