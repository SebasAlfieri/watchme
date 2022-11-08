import React, { useState, useEffect } from "react";
import { getSingleItemCheckout } from "../../services/firestore";
import CheckoutItem from "./CheckoutItem";
import { useParams, Link } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";
import "./Checkout.css";


function Checkout() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getSingleItemCheckout(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    document.title = `Checkout`;
  }, []);

  if (isLoading) {
    return (
      <>
        {error ? (
          <div>
            <h2>Error obteniendo los datos</h2>
            <p>Error</p>
          </div>
        ) : (
          <div className="loader">
            <DotSpinner size={80} speed={0.9} color="#b12025" />
          </div>
        )}
      </>
    );
  }

  return (
    <div className="CheckoutMainContainer">
      <div className="CheckoutContainer">
        <div className="CheckoutTop">
          <h1>Purchase registry</h1>
          <h2>
            Your purchase id is: <span>{data.id}</span>
          </h2>
          <h3>Name: {data.buyer.name}</h3>
          <h3>Email: {data.buyer.email}</h3>
          <h3>Phone number: {data.buyer.phone}</h3>
          <h3>Purchase Time: {data.date}</h3>
          <h3>Total: ${data.total}</h3>
          <h2>Products</h2>
        </div>

        {data.items.map((items) => {
          return (
            <CheckoutItem
              key={items.title}
              actors={items.actors}
              img={items.img[0]}
              count={items.count}
              title={items.title}
              price={items.price}
            />
          );
        })}
        <Link className="CheckoutBackButton" to="/inicio">
            <h3>Back to browse</h3>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
