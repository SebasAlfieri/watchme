import React, { useContext } from "react";
import "./navBar.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function NavBar(){
  const navigate = useNavigate();
  const context = useContext(userContext);
  const { logout } = useContext(userContext);

  function logoutNavigate(){
    logout()
    navigate(`/`)
  }

  return (
    <nav className="navBar">
      <div className="icon2">
        <Link to="/inicio" className="icon">
          Watch.me
        </Link>
        <ul>
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/Category/Action">Action</Link>
          </li>
          <li>
            <Link to="/Category/Drama">Drama</Link>
          </li>
          <li>
            <Link to="/Category/Comedy">Comedy</Link>
          </li>
        </ul>
        <div className="welcome">Profile: {context.username}</div>
        <button className="logout" onClick={logoutNavigate}>Log out</button>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;