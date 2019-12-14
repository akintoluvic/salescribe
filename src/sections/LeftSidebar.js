import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.png'

function LeftSidebar() {
  return (
    <div className="l-bar">
        <div className='navs'>
          <div className='circle'>a</div>
          <Link>
            <img src={pic} alt='menu' width='24px' height='24px' />
            <p>Sale</p>
          </Link>
          <Link>
            <img src={pic} alt='menu' width='24px' height='24px' />
            <p>Stock</p>
          </Link>
          <Link>
            <img src={pic} alt='menu' width='24px' height='24px' />
            <p>Price</p>
          </Link>
        </div>
        <div className='navs'>
          <div className='circle'>a</div>
        </div>
    </div>
  );
}

export default LeftSidebar;
