import React from 'react';
import Item from '../components/Item';

const RightSidebar = () => {
  
  return (
    <div className='r-bar'>
      <div className='r-top' >
        <div className='title'>
          New Order
        </div>
        <div className='order'>
          Fried Rice, Big Chicken, Salad, Big Eva Bottle Water
        </div>
        <div className='sold'>
          <p>Total Amount</p>
          <p >N23,560</p>
          <button className='button'>CONFIRM</button>
        </div>
      </div>
      <div className='r-middle'  >
        <div className='b-title'>
          Add item to list
          <input placeholder='Filter List' />
        </div>
      </div>
      <div className='r-bottom'  >
        <div className='order order-items'>
          <h4>Meat</h4>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <h4>Fish</h4>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <h4>Meat</h4>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

// const rBar = {
//   width: "500px",
//   borderLeft: "2px solid #9391B1",
//   padding: "15px",
//   boxSizing: "border-box",
//   color: '#72748E',
//   // fontSize: '1rem',
// };
