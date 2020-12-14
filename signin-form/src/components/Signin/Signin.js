import React from 'react';
import './signin.css';

const Signin = () => { 
    return(
        <div className='signin'>
        <label>Email</label> 
          <input type='text' placeholder='Email'/>
        <label>Password</label> 
          <input type='text' placeholder='Password'/>
        <button>Sign In</button>
        </div>
    )
};

export default Signin;