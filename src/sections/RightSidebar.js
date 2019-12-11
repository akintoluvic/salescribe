import React from 'react';

function RightSidebar() {
  return (
    <div className="r-bar">
      <div className='top' >
        <div className='title'>
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

const RitBar = {
  rBar: {
    width: '500px',
    borderLeft: '2px solid #9391B1',
    padding: '15px',
    boxSizing: 'borderBox',
  },
  Ttop: {
    height: '252px',
    width: '100%',
    background: 'brown',
    borderRadius: '5px',
  },
  Title: {
    width: '100%',
    background: 'white',
    height: '45px'
  }
}