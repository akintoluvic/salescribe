import React from "react";

const Item = (props) => {
  const { item, onCheck } = props
  return (
    <div className="options" name={item.item} onClick={() => console.log('KK', )}>
      <label htmlFor={item.sn}>
        <input 
          type="checkbox" 
          id={item.sn} 
          name={item.item} 
          onChange={onCheck}
          />
        {item.item}
      </label>
      <span>{item.price}</span>
    </div>
  );
};

export default Item;
