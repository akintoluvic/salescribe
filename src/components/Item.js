import React from "react";

const Item = (props) => {
  const { item, onCheck } = props
  return (
    <div className="options">
      <label htmlFor={item.sn}>
        <input 
          type="checkbox" 
          id={item.sn} 
          name={item.item} 
          onChange={onCheck}
          checked={false}
          />
        {item.item}
      </label>
      <span>{item.price}</span>
    </div>
  );
};

export default Item;
