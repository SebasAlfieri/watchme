import React from 'react'
import "./ItemCount.css"

function Button(props) {
  return (
      <button onClick={props.onClick}
        className={props.class}>{props.children}
      </button>
  )
}

export default Button