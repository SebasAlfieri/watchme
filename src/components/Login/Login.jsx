import React, { useContext, useEffect, useState } from 'react'
import { userContext } from "../../context/userContext"
import "./login.css"
import LoginInputText from "./LoginInputText"
import LoginInputPass from "./LoginInputPass"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { authUser } = useContext(userContext);
  const [ isLogedIn, setIsLogedIn ] = useState(true)

  function loginUser(evt){
    evt.preventDefault();
    let inputUsername = evt.target.elements[0].value;
    authUser(inputUsername)
    setIsLogedIn(false)
    navigate(`/inicio`)
  }

  useEffect(() => {
    document.title = `Welcome`;
  }, []);

  return (
  <>
      {isLogedIn && <div className='loginContainer'>
      <div className="login">
          <div className="loginInputsContainer">
            <div className="inputsLogo">
              <h2>Watch.Me</h2>
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
      }
  </>
  )
}

export default Login