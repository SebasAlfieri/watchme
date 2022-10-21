import React from "react";
import Item from "../Products/Item";
import "./ItemListContainer.css";

function ItemList(props) {
  return (
    <div className="ItemList">
      {props.data.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            title={item.Title}
            img={item.Images[2]}
            price={item.Price}
            rating={item.imdbRating}
            bio={item.Plot}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
