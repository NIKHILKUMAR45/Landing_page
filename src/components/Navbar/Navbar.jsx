import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='Main'>
      <h1 className="left-navbar">Techko</h1>
      <a className='left-navbar-2'>Categories</a>
      <input type='search' placeholder='Search for anythings' className='mid-navbar'></input>
      <a className="right-navbar">Techko Business</a>
      <a className='right-navbar'>Tech on Techko</a>
      <div className="Account">
      <button className='button1'>Login</button>
      <button className='button2'>Signin</button>
      <h4 className='icon'>Icon</h4>
      </div>
    </div>
  );
}
