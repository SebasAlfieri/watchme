import React, { useState, createContext } from "react"


const userContext = createContext();
const Swal = require('sweetalert2')


export default function UserContextProvider(props){
  const [username, setUsername] = useState("")
  const [logedin, setLogedin] = useState(false)


  function authUser(name){
    setUsername(name)
  }

  function logout(){
    Swal.fire('Succesfully logged out')
    setUsername("")
  }

  return (
    <userContext.Provider
      value={{
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