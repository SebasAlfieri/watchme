import React, { useContext, useEffect } from "react";
import { cartCtx } from "../../context/cartContext";
import "./CartView.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, deleteItem } = context;
  let carritoVacio = cart.length === 0;

  useEffect(() => {
    document.title = `Cart`;
  }, []);

  if (cart.length > 0) {
    carritoVacio = false;
  }

  if (carritoVacio) {
    return <div style={{ fontSize: "5rem" }}>Tu carrito esta vacio</div>;
  }

  return (
    <>
      <div className="cartViewMain">
        {cart.map((item) => (
          <div key={item.title} className="cartViewContainers">
            <div
              className="cartViewImg"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="cartViewText">
              <h3>{item.title}</h3>
              <h4>$ {item.price}/u</h4>
              <h5>Amount: {item.count}</h5>
              <h5>Total: {item.count * item.price}</h5>
            </div>
            <button
              className="cartViewDelete"
              onClick={() => deleteItem(item.title)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <CheckoutForm />
    </>
  );
}

export default CartView;
