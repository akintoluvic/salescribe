import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.png'
import price from '../assets/price.svg'
import sales from '../assets/sales.svg'
import stock from '../assets/stock.svg'
import logo from '../assets/logo.svg'

function LeftSidebar() {
  return (
    <div className="l-bar">
        <div className='navs'>
        <img src={logo} alt='sales menu' width='45px' height='45px' />
          <Link>
            <img src={sales} alt='sales menu' width='24px' height='24px' />
            <p>Sales</p>
          </Link>
          <Link>
            <img src={stock} alt='stock menu' width='24px' height='24px' />
            <p>Stock</p>
          </Link>
          <Link>
            <img src={price} alt='price menu' width='24px' height='24px' />
            <p>Price</p>
          </Link>
        </div>
        <div className='navs b-nav'>
        <img src={pic} alt='price menu' width='45px' height='45px' />
        </div>
    </div>
  );
}

export default LeftSidebar;
