import React, { useState, useEffect } from "react";
import { getSingleItemCheckout } from "../../services/firestore";
import CheckoutItem from "./Checkout";
import { useParams } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";


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
    <div>
      <div className="detailContainer" style={{textAlign:"center"}}>


      <h1>Purchase registry</h1>
      <h2>Your purchase id is: {data.id}</h2>
      <br/>
      <h3>Name: {data.buyer.name}</h3>
      <h3>Email: {data.buyer.email}</h3>
      <h3>Phone number: {data.buyer.phone}</h3>
      <h3>Purchase Time: {data.date}</h3>

      
      
      </div>
    </div>
  );
}

export default Checkout