import React, { useState, createContext } from "react"

const userContext = createContext();


export default function UserContextProvider(props){
  const [username, setUsername] = useState("")
  const [logedin, setLogedin] = useState(false)

  function authUser(name){
        setUsername(name)
  }


  return (
    <userContext.Provider
      value={{
        logedin,
        username,
        authUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export { userContext };