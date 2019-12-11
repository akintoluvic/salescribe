import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.png'

function LeftSidebar() {
  return (
    <div className="navbar">
        <Link />
        <div className='navs'>

        </div>
        <div className='navs'>
          <img src={pic} alt='menu' />
        </div>
    </div>
  );
}

export default LeftSidebar;
