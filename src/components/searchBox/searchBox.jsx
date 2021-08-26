import React from "react";
import "./searchBox.css";

const searchBox = ({ placeholder, changeEvent }) => {
  return (
    <div className="search_box">
      <input
        className="search_field"
        type="search"
        placeholder={placeholder}
        onChange={changeEvent}
      />
    </div>
  );
};

export default searchBox;
