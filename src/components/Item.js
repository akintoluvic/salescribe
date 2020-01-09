import React from "react";

const Item = (props) => {
  const { item } = props
  return (
    <div className="options">
      <label htmlFor={item.sn}>
        <input 
          type="checkbox" 
          id={item.sn} 
          name={item.item} 
          />
        {item.item}
      </label>
      <span>{item.price}</span>
    </div>
  );
};

export default Item;
