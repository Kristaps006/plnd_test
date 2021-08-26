import React from "react";
import "./card-list.css";
import Card from "./single-card/single-card";
import { useState } from "react";
import Pagination from "../cards.component/pagination/pagination";

const Cards = (props) => {
  const [currentCards, setCurrentCards] = useState(1);
  const [cardsPerPage] = useState(4);
  const endNumber = currentCards * cardsPerPage;
  const firstNumber = endNumber - cardsPerPage;
  const pagination = (pageNumber) => setCurrentCards(pageNumber);

  let pageNr = currentCards;

  return (
    <React.Fragment>
      <Pagination
        totalAmountCards={props.cards.length}
        cardsPerPage={cardsPerPage}
        pagination={pagination}
        text={pageNr}
      />
      <div className="card-style">
        {props.cards.slice(firstNumber, endNumber).map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Cards;
