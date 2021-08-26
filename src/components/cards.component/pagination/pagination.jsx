import React from "react";
import "./pagination.css";

const Pagination = ({ totalAmountCards, cardsPerPage, pagination, text }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalAmountCards / cardsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="paginate_box">
      <span className="paginate_text">Page {text} out 5</span>
      {pageNumber.map((numbers, id) => {
        return (
          <button
            className="btn_style"
            key={id}
            onClick={(e) => pagination(numbers)}
          >
            {numbers}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
