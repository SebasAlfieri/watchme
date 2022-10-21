import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Card(props) {
  let { title, rating, bio, img, id } = props;
  const urlDetalle = `/watch/${id}`;

  return (
    <Link
      to={urlDetalle}
      className="cardContainer"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="cardTextContainer">
        <div className="cardTextTop">
          <div className="cardTextTitle">{title}</div>
          <div className="cardTextRating">
            {rating}
            <span className="rating">&nbsp;♥</span>
          </div>
        </div>
        <div className="cardTextBottom">
          <div className="cardTextBottomBio">{bio}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
