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
        <h4>{props.bio}</h4>
        <h3>Recomendation</h3>
        {/* Santi acá queria hacer un boton que linkee
        con el detalle del item por ID de firebase
        pero no estoy pudiendo linkear el id :/
        Si no es molestia podrias revisarlo y
        cambiarle lo que está mal? 
        Estuve horas y horas y no lo pude resolver

        <Link to={urlDetalle} className="link">
          Watch Now!
        </Link> */}
      </div>  
      <div className="imgTop">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}

export default ItemTop;