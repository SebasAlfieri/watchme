import React, { useContext } from "react"
import { cartCtx } from "../../context/cartContext"
import { FaCartArrowDown } from 'react-icons/fa';
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

import "./navBar.css";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartCtx);
  const { clear } = useContext(cartCtx);
  
  return (
    <Link to="/Cart" id="cartIcon">
        <div className="cartNumberContainer">
          <FaCartArrowDown /><span>{getTotalItemsInCart() > 0 && getTotalItemsInCart()}</span>
        </div>
        <FaTrashAlt className="deleteButton" onClick={clear}/>
    </Link>
  )
}

export default CartWidget