import React from "react";

function CheckoutItem(items) {
  return (
    <div className="cartViewContainers cartViewContainersCheckout">
      <div
        className="cartViewImg"
        style={{ backgroundImage: `url(${items.img})` }}
      ></div>
      <div className="cartViewText">
        <h3>{items.title}</h3>
        <h4>$ {items.price}/u</h4>
        <h5>Amount: {items.count}</h5>
        <h5>Total: ${items.count * items.price}</h5>
      </div>
    </div>
  );
}

export default CheckoutItem;
