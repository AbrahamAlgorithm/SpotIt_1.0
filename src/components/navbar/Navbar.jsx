import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const { toggleMenu, setToggleMenu } = useState(false);


  return (
    <div className="spotit__navbar">
      <div className="spotit__navbar-links">
        <div className="spotit__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="spotit__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#map">Map</a></p>
          <p><a href="#contact">Contact-Us</a></p>
        </div>
      </div>
      <div className="spotit__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="spotit__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="spotit__navbar-menu_container scale-up-center">
            <div className="spotit__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#map">Map</a></p>
              <p><a href="#contact">Contact-Us</a></p>
              <div className="spotit__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
