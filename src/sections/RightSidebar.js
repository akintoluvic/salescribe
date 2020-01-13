import React, { useState, useEffect } from 'react';
import Item from '../components/Item';

const menu = [
  {sn: 1, item: 'Fried Rice', price: 200, type: 'Rice'},
  {sn: 2, item: 'Jollof Rice', price: 200, type: 'Rice'},
  {sn: 3, item: 'White Rice', price: 200, type: 'Rice'},
  {sn: 4, item: 'Eba', price: 100, type: 'Swallow'},
  {sn: 5, item: 'Pounded Yam', price: 200, type: 'Swallow'},
  {sn: 6, item: 'Semo Vita', price: 200, type: 'Swallow'},
  {sn: 7, item: 'Small Goat Meat', price: 100, type: 'Meat'},
  {sn: 8, item: 'Big Goat Meat', price: 200, type: 'Meat'},
  {sn: 9, item: 'Beef', price: 200, type: 'Meat'},
  {sn: 10, item: 'Small Chicken', price: 200, type: 'Chicken'},
  {sn: 11, item: 'Medium Chicken', price: 200, type: 'Chicken'},
  {sn: 12, item: 'Big Chicken', price: 200, type: 'Chicken'},
  {sn: 13, item: 'Small Turkey', price: 100, type: 'Turkey'},
  {sn: 14, item: 'Medium Turkey', price: 200, type: 'Turkey'},
  {sn: 15, item: 'Big Turkey', price: 200, type: 'Turkey'},
  {sn: 16, item: 'Small Chicken', price: 200, type: 'Chicken'},
  {sn: 17, item: 'Medium Chicken', price: 200, type: 'Chicken'},
  {sn: 18, item: 'Big Chicken', price: 200, type: 'Chicken'},
  {sn: 19, item: 'Small Turkey', price: 100, type: 'Turkey'},
  {sn: 20, item: 'Medium Turkey', price: 200, type: 'Turkey'},
  {sn: 21, item: 'Big Turkey', price: 200, type: 'Turkey'},
]
const men = {
  1: {sn: 18, item: 'Big Chicken', price: 200, type: 'Chicken'},
  2: {sn: 19, item: 'Small Turkey', price: 100, type: 'Turkey'},
  3: {sn: 20, item: 'Medium Turkey', price: 200, type: 'Turkey'},
  4: {sn: 21, item: 'Big Turkey', price: 200, type: 'Turkey'},
}

const menuTypes = ['Rice', 'Meat', 'Turkey', 'Chicken', 'Swallow']

const RightSidebar = () => {
  const [items, setItems] = useState(menu);
  const [order, setOrder] = useState('');
  const [amount, setAmount] = useState(0);
  const [ordered, setOrdered] = useState([]);
  const [types, setTypes] = useState(menuTypes);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
      console.log(e.target.name, 'C click')
      // setOrder([...order, e.target.name])
      let clickedItem = items.filter(item => item.item === e.target.name)
      setOrdered([...ordered, {item: clickedItem[0].item, price: clickedItem[0].price}])
      let updatedOrder = order.length === 0 ? e.target.name : order + ', ' + e.target.name
      let updatedAmount = amount + clickedItem[0].price
      console.log(clickedItem, clickedItem[0].price, updatedAmount)
      
      setAmount(updatedAmount)
      setOrder(updatedOrder)
  }

  // const totalOrder = order.reduce((currentOrder, previousOrder, index) => 
  //     `{previousOrder}, + {currentOrder}`
  // )

  return (
    <div className='r-bar'>
      <div className='r-top' >
        <div className='title'>
          New Order
        </div>
        <div className='order'>
          {order}
        </div>
        <div className='sold'>
          <p>Total Amount</p>
          <p >N {amount}</p>
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
          {items.map(each => <Item item={each} key={each.sn} onCheck={handleCheck}/>)}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
