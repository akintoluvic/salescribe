import React from 'react';



const RightSidebar = () => {
  
  return (
    <div style={rBar}>
      <div style={tTop} >
        <div style={title}>
          New Order
        </div>
        <div className='order'>
          Fried Rice, Big Chicken, Salad, Big Eva Bottle Water
        </div>
        <div className='order'>
          New Order
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

const rBar = {
  width: "500px",
  borderLeft: "2px solid #9391B1",
  padding: "15px",
  boxSizing: "border-box"
};
const tTop = {
  height: "252px",
  width: "100%",
  background: "brown",
  borderRadius: "5px",
  border: '1px solid #F0F0F7',
  
};
const title = {
  width: "100%",
  background: "white",
  padding: '12px 20px',
  textAlign: 'right'
};