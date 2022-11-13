import React, { useState, useEffect } from "react";
import { getSingleItemTop } from "../../services/firestore";
import ItemTop from "./ItemTop";
import { DotSpinner } from "@uiball/loaders";
import "./ItemTopContainer.css";
import { useParams } from "react-router-dom";

function ItemTopContainer() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleItemTop(id)
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
    <div className="mainTopContainer">
      <ItemTop
        id={data.id}
        title={data.Title}
        img={data.Images}
        bio={data.Plot}
      />
    </div>
  );
}

export default ItemTopContainer;
