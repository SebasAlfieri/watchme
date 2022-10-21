import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/firestore";
import ItemDetail from "./ItemDetail";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

    useEffect(() => {
    document.title = `Movie details`;
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
      <div className="detailContainer">
        <ItemDetail
          title={data.Title}
          offer={data.offer}
          img={data.Images}
          price={data.Price}
          date={data.Year}
          actors={data.Actors}
          bio={data.Plot}
          genre={data.genre}
          stock={data.stock}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
