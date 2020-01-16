import React from "react";

const Item = (props) => {
  const { item, onCheck, addItem } = props
  return (
    <div className="options" name={item.item} onClick={() => addItem(item.item)}>
      <label htmlFor={item.sn}>
        <span 
          />
        {item.item}
      </label>
      <span>{item.price}</span>
    </div>
  );
};

export default Item;
