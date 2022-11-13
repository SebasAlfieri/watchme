import React, { useState, createContext } from "react"


const userContext = createContext();
const Swal = require('sweetalert2')


export default function UserContextProvider(props){
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [logedin, setLogedin] = useState(false)


  function authUser(name){
    setUsername(name)
    setIsLogedIn(true)
  }


  function logout(){
    Swal.fire('Succesfully logged out')
    setUsername("")
    setIsLogedIn(false)
  }

  return (
    <userContext.Provider
      value={{
        isLogedIn,
        logedin,
        username,
        authUser,
        logout
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export { userContext };