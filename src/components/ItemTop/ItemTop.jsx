import React from "react";
import "./ItemTopContainer.css";
import { Link } from "react-router-dom";

function ItemTop(props) {
  let { id } = props
  const urlDetalle = `/watch/${id}`;

  return (
    <div className="itemTop">
      <div className="titleTop">
        <h1>{props.title}</h1>
        <h4 className="h4Top">{props.bio}</h4>
        <h3 className="h3Top">Recomendation</h3>
        <Link to={urlDetalle} className="link">
          Watch Now!
        </Link>
      </div>  
      <div className="imgTop">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}

export default ItemTop;
