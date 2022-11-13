import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./itemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { cartCtx } from "../../context/cartContext";

function ItemDetail(data) {
  const [isInCartState, setIsInCartState] = useState(false);
  const { addItem, isInCart } = useContext(cartCtx);

  function handleAddToCart(count) {
    if (isInCart(data.title) == true) {
      alert("Ya tienes este producto en el carrito");
      setIsInCartState(true);
    } else if (isInCart(data.title) == false) {
      setIsInCartState(true);
      addItem(data, count);
    }
  }

  const stylePrice = {
    color: data.offer ? "#74cc41" : "white",
  };

  return (
    <div className="mainDetailContainer">
      <div className="textContainer">
        <div className="title">
          <div className="titleH1">
            <h1>{data.title}</h1>
          </div>
          <div className="titleYear">
            <h2>{data.date}</h2>
          </div>
        </div>
        <div className="bio">
          <p>{data.bio}</p>
        </div>
        <div className="info">
          <div className="infoTypes">
            <p>Starring</p>
            <p>Genre</p>
            <p>Price</p>
          </div>
          <div className="infoData">
            <p>{data.actors}</p>
            <p>{data.genre}</p>
            <p style={stylePrice}>
              ${(data.price * (100 - data.offer)) / 100}{" "}
              {data.offer > 0 && (
                <span style={{ color: "#B12025" }}>{data.offer}% OFF!</span>
              )}
            </p>
          </div>
        </div>
        {isInCartState ? (
          <Link to="/Cart" className="buttonToCart">
            Go to Cart
          </Link>
        ) : (
          <ItemCount stock={data.stock} onAddToCart={handleAddToCart} />
        )}
      </div>
      <div className="imgContainer">
        <img src={data.img} alt="" />
      </div>
    </div>
  );
}

export default ItemDetail;
