import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.png'

function LeftSidebar() {
  return (
    <div className="navbar">
        <Link />
        <div className='navs'>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
        <div className='navs'>
          <img src={pic} alt='menu' width='45px' height='45px' />
        </div>
    </div>
  );
}

export default LeftSidebar;
