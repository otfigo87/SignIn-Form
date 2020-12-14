import React from 'react';
import './register.css';

const Register = () => { 
    return(
        <div className='register'>
        <label>Name</label> 
          <input type='text' placeholder='Name'/>
        <label>Email</label> 
          <input type='text' placeholder='Email'/>
        <label>Password</label> 
          <input type='text' placeholder='Password'/>
        <label>Re-enter Password</label> 
          <input type='text' placeholder='Password'/>
        <button>Register</button>
        </div>
    )
};

export default Register;