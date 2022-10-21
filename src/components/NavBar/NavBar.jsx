import "./navBar.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

function NavBar(){
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
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;