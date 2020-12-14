import React from 'react';
import './navigation.css';

const Navigation = ({ onRouteChange }) => {
    return(
    <div>
      <nav className='navbar'>
        <ul>
          <li onClick={() => onRouteChange('signin')} >Sign In</li>
          <li onClick={() => onRouteChange('register')} >Sign Up</li>
        </ul>
      </nav>
    </div>
    )
};

export default Navigation;