import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="spotit__navbar">
      <div className="spotit__navbar-links">
        <div className="spotit__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="spotit__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#map">Map</a></p>
          <p><a href="#contact">Contact-Us</a></p>
        </div>
      </div>
      <div className="spotit__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="spotit__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="spotit__navbar-menu_container scale-up-center">
          <div className="spotit__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#map">Map</a></p>
            <p><a href="#contact">Contact-Us</a></p>
          </div>
          <div className="spotit__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
