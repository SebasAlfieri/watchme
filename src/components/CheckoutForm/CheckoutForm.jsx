import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";

function CheckoutForm() {
  const context = useContext(cartCtx);
  const { cart, getTotalPriceInCart, getItemPrice } = context;
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleCheckout(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getTotalPriceInCart(),
    };
    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
    });
  }

  function inputChangeHandler(evento) {
    let inputName = evento.target.name;
    let value = evento.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleCheckout}>
        <div className="form-item">
          <label htmlFor="name">Nombre</label>
          <input
            value={dataForm.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="telefono">Telefono</label>
          <input
            value={dataForm.phone}
            onChange={inputChangeHandler}
            name="phone"
            type="text"
            placeholder="Telefono"
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            value={dataForm.email}
            onChange={inputChangeHandler}
            name="email"
            type="email"
            placeholder="Correo"
            required
          />
        </div>
        <div className="totalPrice">
          <span>Total Price ${getItemPrice()}</span>
          <button type="submit" className="buyCartButton">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
