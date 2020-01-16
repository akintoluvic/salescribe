import React from "react";

const Item = (props) => {
  const { item, onCheck, addItem } = props
  return (
    <div className="options" name={item.item} onClick={() => addItem(item.item)}>
      <span>
        {item.item}
      </span>
      <span>{item.price}</span>
    </div>
  );
};

export default Item;
