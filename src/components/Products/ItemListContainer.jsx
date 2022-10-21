import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getItems, getItemsByCategory } from "../../services/firestore";
import ItemList from "../Products/ItemList";
import { useParams } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";

function ItemListContainer() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((respuestaDatosFiltrados) => setData(respuestaDatosFiltrados))
        .then((document.title = `${cat} Movies`))
        .finally(() => setIsLoading(false));
    }
  }, [cat]);

  return (
    <div id="Products">
      {isLoading && (
        <div className="loader">
          <DotSpinner size={80} speed={0.9} color="#b12025" />
        </div>
      )}
      <div className="productsContainer">
        <ItemList data={data} />
      </div>
    </div>
  );
}

export default ItemListContainer;
