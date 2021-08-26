import React from "react";
import "./single-card.css";

const singleCard = (props) => {
  const { title, description, imagePath } = props.card;

  return (
    <div className="card_box">
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="img" src={imagePath} alt="description" />
    </div>
  );
};

export default singleCard;
