import React, { useState } from 'react';
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
]

const menuTypes = ['Rice', 'Meat', 'Turkey', 'Chicken', 'Swallow']

const RightSidebar = () => {
  const [items, setItems] = useState(menu);
  const [order, setOrder] = useState([]);
  const [types, setTypes] = useState(menuTypes);

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
          {items.map(each => <Item item={each} key={each.item} />)}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
