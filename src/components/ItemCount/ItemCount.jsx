import React, { useState } from "react";
import "./ItemCount.css";
import Button from "./Button";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleClickMenos() {
    if (count > 1) setCount(count - 1);
  }

  function handleClickMas() {
    if (count < stock) setCount(count + 1);
  }

  return (
    <div className="ItemCountContainer">
      <div className="itemCountTitle">
        <h2>How many copies?</h2>
      </div>
      <div className="buttonsContainer">
        <Button class="add" onClick={handleClickMenos}>
          -
        </Button>
        <span>{count}</span>
        <Button class="add" onClick={handleClickMas}>
          +
        </Button>
      </div>
      <div className="buyButton">
        <Button
          onClick={() => {
            onAddToCart(count);
          }}
          class="buy"
        >
          Add to cart
        </Button>
      </div>
      <p className="copiesLeft">Copies left {stock}</p>
    </div>
  );
}

export default ItemCount;
