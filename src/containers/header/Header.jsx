import React from 'react';
import './header.css';
import ai from '../../assets/ai.png';

const Header = () => (
  <div className="spotit__header section__padding" id="home">
    <div className="spotit__header-content">
      <h1 className="gradient__text">Discover Products Locally</h1>
      <p>Find the products you love at nearby stores with SpotIt.</p>

      <div className="spotit__header-content__input">
        <input type="email" placeholder="Enter your search" />
        <button type="button">Search Now</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header
