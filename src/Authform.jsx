import React, { useState } from 'react';
import './App.css';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>  

        {isLogin ? (
          <div className='form'>
            <h2>Login Form</h2>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <a href="#" className="forgot-pass">Forgot Password?</a>
            <button>Login</button>
            <p>Not a member? {' '}
              <span className="toggle-link" onClick={() => setIsLogin(false)}>
                Sign Up now
              </span>
            </p>
          </div>       
        ) : (
          <div className='form'>
            <h2>Sign Up Form</h2>
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Sign Up</button>
            <p>Already a member? {' '}
              <span className="toggle-link" onClick={() => setIsLogin(true)}>
                Login now
              </span>
            </p>
          </div>       
        )}        
      </div>
    </div>
  );
}

export default AuthForm;