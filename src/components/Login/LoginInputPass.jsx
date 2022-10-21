import React from "react";

function LoginInputPass(props) {
  let { text, type } = props;
  function handleInput(evt) {
    let target = evt.target;
    let value = evt.key.toLowerCase();

    if (props.notallow.includes(value) || evt.keyCode === 8) {
    } else {
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

export default LoginInputPass;
