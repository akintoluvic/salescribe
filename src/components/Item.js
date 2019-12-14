import React from "react";

const Item = () => {
  return (
    <div className="options">
      <label htmlFor="meat">
        <input type="checkbox" id="meat" name="meat" />
        Big goat meat
      </label>
      <span>100</span>
    </div>
  );
};

export default Item;
