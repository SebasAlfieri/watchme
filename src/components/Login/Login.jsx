import React, { useContext } from 'react'
import { userContext } from "../../context/userContext"
import "./login.css"
import LoginInputText from "./LoginInputText"
import LoginInputPass from "./LoginInputPass"

function Login() {
  const {username} = useContext(userContext);
  const { authUser } = useContext(userContext)

  function loginUser(evt){
    evt.preventDefault();
    let inputUsername = evt.target.elements[0].value;
    console.log(evt.target.elements[0].value)
    authUser(inputUsername)
  }

  return (
    <div className='loginContainer'>
      <div className="login">
        <div className="loginInputsContainer">
          <div className="inputsLogo">
            <h2>Watch.Me {username}</h2>
          </div>
          <form onSubmit={loginUser} action="" className="inputsContainer">
            <LoginInputText text="Username"/>
            <LoginInputPass notallow="1234567890" text="Password (numbers only)" type="password"/>
            <button className='inputSubmit' type="submit">Log In</button>
          </form>
        </div>
        <div className="loginRight"></div>
      </div>
    </div>
  )
}

export default Login