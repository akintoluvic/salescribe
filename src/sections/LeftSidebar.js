import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.png'

function LeftSidebar() {
  return (
    <div className="l-bar">
        <div className='navs'>
          <Link>
            <img src={pic} alt='menu' width='45px' height='45px' />
            Meadle
          </Link>
          <Link>
            <img src={pic} alt='menu' width='45px' height='45px' />
            Meadle
          </Link>
          <Link>
            <img src={pic} alt='menu' width='45px' height='45px' />
            Meadle
          </Link>
        </div>
        <div className='navs'>
          <img src={pic} alt='menu' width='45px' height='45px' />
        </div>
    </div>
  );
}

export default LeftSidebar;
