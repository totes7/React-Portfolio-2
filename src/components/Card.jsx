import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className={props.classOuter}>
        <Link to={props.path} target={props.target}>
          <figure className="card-image-wrap">
            <img src={props.src} alt={props.alt} className={props.classImage} />
            <figcaption>{props.caption}</figcaption>
            <figcaption>{props.title}</figcaption>
          </figure>
        </Link>

        <div className="card-info">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
